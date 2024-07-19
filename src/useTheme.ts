import { useEffect } from 'react'

export const useTheme = ({ themeOption }:{themeOption: string}) => {
  useEffect(() => {
    if (themeOption === 'Light') {
      document.documentElement.classList.remove('dark')
    } else if (themeOption === 'Dark') {
      document.documentElement.classList.add('dark')
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [themeOption])
}
