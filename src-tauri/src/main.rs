
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
use commands::loadpdf::loadpdf;
use commands::readpdf::readpdf;
use commands::audiocontrol::texttospeech;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![loadpdf,readpdf, texttospeech])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
