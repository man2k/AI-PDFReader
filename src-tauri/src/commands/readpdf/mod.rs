use pdf_extract::extract_text_by_page;

#[tauri::command(async)]
pub fn readpdf(path: String)->String {
    println!("Reading");
    let out = extract_text_by_page(path,1).unwrap();
    println!("{out}");
    out
}