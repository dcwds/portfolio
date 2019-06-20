import { useState } from "react"

type State = {
  checked: boolean
}

const useToggle = (toggleMode: VoidFunction) => {
  const [toggle, setToggle] = useState<State>({
    checked: false
  })

  const handleChange = (checked: boolean) => {
    setToggle({ ...toggle, checked })
    toggleMode()
  }

  return {
    handleChange,
    toggle
  }
}

export default useToggle
