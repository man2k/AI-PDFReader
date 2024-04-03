use pdf_extract::extract_text;
use std::time::Duration;
use std::{fs::File, thread};
use std::io::prelude::*;
use tts::{Tts, Voice};

#[tauri::command]
pub async fn readpdf(path: String)->String {
    println!("Reading");
    let out = extract_text(path).unwrap();
    // println!("{out}");
    let mut file = File::create("../output.txt").expect("Unable to create file");
    file.write_all(out.as_bytes()).expect("Unable to write to file");
    text_to_speech(&out).await;
    out
}

async fn text_to_speech(text: &str){
    let mut tts = Tts::default().unwrap();

    tts.on_utterance_begin(Some(Box::new(|utterance| {
        println!("Started speaking {:?}", utterance);
        thread::sleep(Duration::from_secs(1000));
    }))).expect("on_utterance_begin error");
    tts.on_utterance_end(Some(Box::new(|utterance| {
        println!("Finished speaking {:?}", utterance)
    }))).expect("on_utterance_end error");
    tts.on_utterance_stop(Some(Box::new(|utterance| {
        println!("Stopped speaking {:?}", utterance)
    }))).expect("on_utterance_stop error");
    let voices = tts.voices().unwrap();
    println!("{:?}",voices);
    tts.set_voice(&voices[4]);
    tts.set_volume(100.0);
    
    tts.speak(text, false).expect("Error");

}