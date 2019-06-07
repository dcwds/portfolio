import React from "react"

const ContactForm = () => (
  <form
    name="contact"
    method="post"
    action="/contact-success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />

    <fieldset>
      <label htmlFor="name">Full Name</label>
      <input type="text" name="name" id="name" placeholder="Tyrion Lannister" />
    </fieldset>

    <fieldset>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="tyrion.lannister@gmail.com"
      />
    </fieldset>

    <fieldset>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" placeholder="Hello..." rows={6} />
    </fieldset>

    <input type="submit" value="Send Message" />
  </form>
)

export default ContactForm
