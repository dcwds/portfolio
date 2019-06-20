import { useState } from "react"

type State = {
  checked: boolean
}

const useToggle = (isDark: boolean, callback: VoidFunction) => {
  const [toggle, setToggle] = useState<State>({
    checked: isDark
  })

  const handleChange = (checked: boolean) => {
    setToggle({ ...toggle, checked })
    callback()
  }

  return {
    handleChange,
    toggle
  }
}

export default useToggle
