# Metronome

A metronome built with Tauri.

### Hotkeys

|  **Key**  |       **Function**       |
| :-------: | :----------------------: |
| Spacebar  |       Toggle play        |
|  Escape   |      Close settings      |
| Backspace |         Edit BPM         |
|    0-9    |         Edit BPM         |
|   ←↑→↓    |         Edit BPM         |
|     m     |       Toggle mute        |
|     t     |        Tap tempo         |
|     f     | Toggle metronome display |

## Running locally

### Clone repository

```bash
git clone git@github.com:ZaneH/metronome.git
```

### Install dependencies and run project

```bash
yarn && yarn tauri dev
```

### Build target binary

```bash
yarn tauri build
```

## Releases

The latest release can be found [here](https://github.com/ZaneH/metronome/releases).

## Formatting

Code is auto-formatted when committed using `.prettierrc`.
