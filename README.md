<img src="https://i.imgur.com/S5SZAeC.png" align="right" height="52px" width="52px">

# The Minimal Metronome

[Visit the website](https://metronome-www.vercel.app)

A feature packed and cross-platform metronome. What could be more exciting?!

Built using Tauri + React.

## Releases

The latest release can be found [here](https://github.com/ZaneH/metronome/releases).

## Running locally

```bash
$ git clone git@github.com:ZaneH/metronome.git
$ cd metronome
$ yarn && yarn tauri dev
```

### Build target binary

Outputs to `/src-tauri/target/release/bundle`

```bash
$ yarn tauri build
```

## Contributions

Contributions are welcome! Create a PR or issue to get started.

### Formatting

Code is auto-formatted when committed using `.prettierrc`.

## Metronome Hotkeys

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
