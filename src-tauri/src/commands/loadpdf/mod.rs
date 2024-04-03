use std::fs::File;
use std::io::Read;


#[tauri::command]
pub fn loadpdf(path: String) -> Vec<u8> {
    // println!("path: {}", path);
    let mut file = match File::open(&path) {
        Err(_e) =>  return vec![0; 1],
        Ok(file) => file,
    };
    let mut contents = Vec::new();
    let _ = file.read_to_end(&mut contents);
    contents
}