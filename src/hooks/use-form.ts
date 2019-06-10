import { useState } from "react"

const useForm = (initialState: object, callback: VoidFunction) => {
  // REFACTOR:
  // I shouldn't use an `any` assertion here.
  // As I learn the ins-and-outs of TypeScript, a correct
  // solution should be made clearer.
  const [values, setValues] = useState(initialState as any)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    if (event) {
      event.preventDefault()
    }

    callback()
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const target = event.target as HTMLInputElement

    event.persist()
    setValues({ ...values, [target.name]: target.value })
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}

export default useForm
