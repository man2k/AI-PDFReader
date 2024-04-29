use pdf_extract::extract_text;
// use std::fs::File;
// use std::io::prelude::*;
use super::audiocontrol::texttospeech;

#[tauri::command]
pub async fn readpdf(path: String)->String {
    let out = extract_text(path).unwrap();
    // println!("{out}");
    // let mut file = File::create("../output.txt").expect("Unable to create file");
    // file.write_all(out.as_bytes()).expect("Unable to write to file");
    // text_to_speech(&out).await;
    texttospeech(&out);
    println!("Reading");
    out

}
#[tauri::command]
pub async fn pausepdf() {
    texttospeech("pause");
    println!("Paused");
    // let out = extract_text(path).unwrap();
    // println!("{out}");
    // let mut file = File::create("../output.txt").expect("Unable to create file");
    // file.write_all(out.as_bytes()).expect("Unable to write to file");
    // text_to_speech(&out).await;
}

