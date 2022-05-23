export const DataThemes = {
  dracula: 'dracula',
  lemonade: 'lemonade',
  valentine: 'valentine',
  night: 'night',
  winter: 'winter',
  halloween: 'halloween',
  dark: 'dark',
  light: 'light',
} as const

export type DataThemesTypes = keyof typeof DataThemes
