use tts::Tts;
use std::thread;
use std::time::Duration;


#[tauri::command(async)]
pub fn texttospeech(text: &str){
    let mut tts = Tts::default().unwrap();

    tts.on_utterance_begin(Some(Box::new(|utterance| {
        println!("Started speaking {:?}", utterance);
        thread::sleep(Duration::from_secs(100));
    }))).expect("on_utterance_begin error");
    tts.on_utterance_end(Some(Box::new(|utterance| {
        println!("Finished speaking {:?}", utterance)
    }))).expect("on_utterance_end error");
    tts.on_utterance_stop(Some(Box::new(|utterance| {
        println!("Stopped speaking {:?}", utterance)
    }))).expect("on_utterance_stop error");
    let voices = tts.voices().unwrap();
    // println!("{:?}",voices);
    let _ = tts.set_voice(&voices[4]);
    // let _ = tts.set_volume(100.0);
    
    tts.speak(text, false).expect("Error");

}