import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

export default () => (
  <Layout>
    <SEO
      title="Contact"
      description="Get in touch with me."
    />

    <h1>Contact</h1>

    <ContactForm />
  </Layout>
)
