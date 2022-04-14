import { createContext, FC, useContext, useState } from 'react'

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

interface DataThemeProviderProps {
  color: DataThemesTypes
}
interface ContextProps {
  readonly dataTheme: DataThemesTypes
  // eslint-disable-next-line no-unused-vars
  readonly setDataTheme: (color: DataThemesTypes) => void
}

export const DataThemeContext = createContext<ContextProps>({
  dataTheme: 'dark',
  setDataTheme: () => null,
})

export const DataThemeProvider: FC<DataThemeProviderProps> = ({
  children,
  color,
}) => {
  const [dataTheme, setDataTheme] = useState<DataThemesTypes>(color)

  return (
    <DataThemeContext.Provider value={{ dataTheme, setDataTheme }}>
      {children}
    </DataThemeContext.Provider>
  )
}

export const useDataTheme = () => {
  const { dataTheme, setDataTheme } = useContext(DataThemeContext)

  return {
    dataTheme,
    setDataTheme,
  }
}
