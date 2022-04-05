import { atom } from 'recoil'

export const Themes = {
  dracula: 'dracula',
  valentine: 'valentine',
  night: 'night',
  halloween: 'halloween,',
} as const

export type Colors = keyof typeof Themes

export const themeState = atom<Colors>({
  key: 'theme',
  default: 'dracula',
})
