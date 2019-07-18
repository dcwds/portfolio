import React from "react"
import ContactForm from "../components/contact-form"

import SEO from "../components/seo"
import { SEOContactPage } from "../seo-config"

import MailLink from "../components/mail-link"

const ContactPage = () => (
  <>
    <SEO
      title={SEOContactPage.title}
      description={SEOContactPage.description}
    />

    <section className="hero">
      <h1>Let's talk!</h1>
      <p>
        You can also reach me at <MailLink address="iam@dcwds.co" />
      </p>
    </section>

    <section className="body">
      <ContactForm />
    </section>
  </>
)

export default ContactPage
