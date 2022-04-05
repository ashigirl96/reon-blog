import { createContext, FC, useContext, useState } from 'react'

export type DataThemes =
  | 'dark'
  | 'valentine'
  | 'night'
  | 'dracula'
  | 'halloween'

interface DataThemeProviderProps {
  color: DataThemes
}
interface ContextProps {
  readonly dataTheme: DataThemes
  // eslint-disable-next-line no-unused-vars
  readonly setDataTheme: (color: DataThemes) => void
}

export const DataThemeContext = createContext<ContextProps>({
  dataTheme: 'dark',
  setDataTheme: () => null,
})

export const DataThemeProvider: FC<DataThemeProviderProps> = ({
  children,
  color,
}) => {
  const [dataTheme, setDataTheme] = useState<DataThemes>(color)

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
