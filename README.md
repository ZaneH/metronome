# The Minimal Metronome

[Visit the landing page](https://zane.pw/metronome)

## Features

- [x] Tempo tapper
- [x] Time signatures
- [x] Keyboard support
- [x] Fullscreen and a mini-mode
- [x] Cross-platform support
- [x] Dark mode and light mode
- [ ] Custom themes

<br />

<div align="center">
  <img width="38%" alt="App Screenshot" src="https://i.imgur.com/flnGoVg.png">
  &nbsp;&nbsp;&nbsp;
  <img width="38%" alt="App Screenshot" src="https://i.imgur.com/oVpL7QY.png">
</div>

<br />

# Releases

The latest release can be found [here](https://github.com/ZaneH/metronome/releases).

## Run Locally

```bash
$ git clone git@github.com:ZaneH/metronome.git
$ cd metronome
$ yarn && yarn tauri dev
```

## Build target binary

Outputs to `/src-tauri/target/release/bundle`

```bash
$ yarn tauri build
```

# Contributions

Contributions are welcome! Create a PR or issue to get started.

## Formatting

Code is auto-formatted when committed using `.prettierrc`.

# Hotkeys

|  **Key**  |       **Function**       |
| :-------: | :----------------------: |
| Spacebar  |       Toggle play        |
|     d     |     Toggle dark mode     |
|     f     | Toggle metronome display |
|     m     |       Toggle mute        |
|     s     |     Toggle settings      |
|     t     |        Tap tempo         |
|    0-9    |         Edit BPM         |
|   ←↑→↓    |         Edit BPM         |
| Backspace |         Edit BPM         |
|  Escape   |      Close settings      |
