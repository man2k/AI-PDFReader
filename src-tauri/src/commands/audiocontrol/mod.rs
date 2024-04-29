// use tts::Tts;
// use std::thread;
// use std::time::Duration;


// #[tauri::command(async)]
// pub fn texttospeech(text: &str){
//     let mut tts = Tts::default().unwrap();

//     tts.on_utterance_begin(Some(Box::new(|utterance| {
//         println!("Started speaking {:?}", utterance);
//         thread::sleep(Duration::from_secs(100));
//     }))).expect("on_utterance_begin error");
//     tts.on_utterance_end(Some(Box::new(|utterance| {
//         println!("Finished speaking {:?}", utterance)
//     }))).expect("on_utterance_end error");
//     tts.on_utterance_stop(Some(Box::new(|utterance| {
//         println!("Stopped speaking {:?}", utterance)
//     }))).expect("on_utterance_stop error");
//     let voices = tts.voices().unwrap();
//     // println!("{:?}",voices);
//     let _ = tts.set_voice(&voices[4]);
//     // let _ = tts.set_volume(100.0);
    
//     tts.speak(text, false).expect("Error");

// }

use tts::Tts;
use std::thread;
use std::time::Duration;

struct AudioPlayer {
    tts: Tts,
    is_paused: bool,
}

impl AudioPlayer {
    fn new() -> Self {
        let tts = Tts::default().unwrap();
        AudioPlayer { tts, is_paused: false }
    }

    fn play(&mut self, text: &str) {
        if !self.is_paused {
            self.tts.on_utterance_begin(Some(Box::new(|utterance| {
                println!("Started speaking {:?}", utterance);
                thread::sleep(Duration::from_secs(100));
            }))).expect("on_utterance_begin error");
            self.tts.on_utterance_end(Some(Box::new(|utterance| {
                println!("Finished speaking {:?}", utterance)
            }))).expect("on_utterance_end error");
            self.tts.on_utterance_stop(Some(Box::new(|utterance| {
                println!("Stopped speaking {:?}", utterance)
            }))).expect("on_utterance_stop error");
            let voices = self.tts.voices().unwrap();
            let _ = self.tts.set_voice(&voices[4]);
            self.tts.speak(text, false).expect("Error");
        }
    }

    fn pause(&mut self) {
        self.tts.stop().expect("Error stopping audio");
        self.is_paused = true;
    }

    fn resume(&mut self) {
        if self.is_paused {
            self.play(""); // Resume playing from where it was paused
            self.is_paused = false;
        }
    }
}

// #[tauri::command(async)]
pub fn texttospeech(text: &str) {
    
    static mut AUDIO_PLAYER: Option<AudioPlayer> = None;
    unsafe {
        let audio_player = AUDIO_PLAYER.get_or_insert(AudioPlayer::new());
        // match text {
            // Some(t) => {
                // println!("{}", text);
                if text.is_empty() {
                    audio_player.resume();
                }else if text == "pause"{
                    println!("paused");
                    audio_player.pause();
                } else {
                    audio_player.play(text);
                }
            // },
            // None => {
            //     println!("none");
            //     match command {
            //         Some(com) =>{
            //             println!("{com}");
            //             if com == "pause"{
            //                 println!("pdone");
            //                 audio_player.pause();
            //             }
            //         }
            //         None =>{
                        
            //         }
            //     }
                // Handle the case when no text is passed
            // }
        }
    }
// }