import { useEffect, useState } from "react"

type State = {
  dark: boolean
  hasModeMounted: boolean
}

const getMode = () => {
  const storedMode = localStorage.getItem("dark")

  // Check if a mode is being stored in local storage. If not,
  // set the mode to a default (in this case, dark mode is enabled.)
  if (storedMode === null) {
    // REFACTOR: This is behaving as the default value for the mode.
    // This should be abstracted into a property.
    return true
  } else {
    return JSON.parse(storedMode)
  }
}

const useDarkMode = () => {
  const [mode, setMode] = useState<State>({
    dark: true,
    hasModeMounted: false
  })

  useEffect(() => {
    setMode({ ...mode, dark: getMode(), hasModeMounted: true })
  }, [])

  return { mode, setMode }
}

export default useDarkMode
