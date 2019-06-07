import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactSuccessPage = () => (
  <Layout>
    <SEO title="Success" description="Thank you for reaching out!" />

    <main className="content page-contact-success">
      <h1>Your message made it to my inbox.</h1>
      <p>Thanks for reaching out! I'll respond as soon as possible. :-)</p>
    </main>
  </Layout>
)

export default ContactSuccessPage
