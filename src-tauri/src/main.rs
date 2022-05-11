#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{Menu, MenuItem, Submenu};
use tauri_plugin_store::PluginBuilder;

fn main() {
  let menu = Menu::new().add_submenu(Submenu::new(
    "Metronome",
    Menu::new().add_native_item(MenuItem::Quit),
  ));

  tauri::Builder::default()
    .menu(menu)
    .plugin(PluginBuilder::default().build())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
