export type SETTING_KEY = keyof typeof SETTINGS

export const SETTINGS = {
  'show-metronome': 'Show metronome',
  'custom-background-color': 'Custom background color',
  'change-theme': 'Change Theme',
  'mute-sound': 'Mute sound',
  'blink-on-tick': 'Blink on tick',
  'dark-mode': 'Dark mode',
} as const
