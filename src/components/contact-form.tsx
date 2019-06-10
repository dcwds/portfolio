import React from "react"
import useForm from "../hooks/use-form"

const initialState = {
  email: "",
  message: "",
  name: ""
}

const sendMsg = () => {
  alert("Submitted.")
}

const ContactForm = () => {
  const { values, handleChange, handleSubmit } = useForm(initialState, sendMsg)

  return (
    <form
      name="contact"
      method="post"
      action="/contact-success"
      data-netlify="false" // set this to "true" after debugging
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <fieldset>
        <label htmlFor="name">Name</label>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="Tyrion Lannister"
          spellCheck={false}
          onChange={handleChange}
          value={values.name}
          required={true}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="tyrion.lannister@gmail.com"
          spellCheck={false}
          onChange={handleChange}
          value={values.email}
          required={true}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Hello..."
          rows={6}
          onChange={handleChange}
          value={values.message}
          required={true}
        />
      </fieldset>

      <input type="submit" value="Send Message" />
    </form>
  )
}

export default ContactForm
