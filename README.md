# A Metronome

Jam packed and cross-platform. What could be more exciting?!

### Hotkeys

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

## Releases

The latest release can be found [here](https://github.com/ZaneH/metronome/releases).

## Running locally

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

## Formatting

Code is auto-formatted when committed using `.prettierrc`.
