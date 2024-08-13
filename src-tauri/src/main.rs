// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Runtime;

#[tauri::command]
async fn request_get<R: Runtime>(
    _app: tauri::AppHandle<R>,
    _window: tauri::Window<R>,
    url: String,
) -> String {
    match yuncore::http::get(url).await {
        Ok(response) => response,
        Err(e) => e.to_string(),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![request_get])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
