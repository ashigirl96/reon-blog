import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { DataThemesTypes, DataThemes } from '@/components/DataTheme'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : sessionStorage, //修正
})

export const pathState = atom({
  key: 'pathState',
  default: '',
})

const sessionStorageColorScheme = () => {
  if (typeof window === 'undefined') {
    return 'night'
  }
  const colorScheme = JSON.parse(sessionStorage['recoil-persist'])[
    'colorScheme'
  ]
  return colorScheme == undefined ? DataThemes.night : colorScheme
}

export const colorScheme = atom<DataThemesTypes>({
  key: 'colorScheme',
  default: sessionStorageColorScheme(),
  effects: [persistAtom],
})
