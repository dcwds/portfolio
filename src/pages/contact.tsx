import React from "react"
import Layout from "../components/layout"

import ContactForm from "../components/contact-form"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Get in touch with me." />

    <main className="content page-contact">
      <section className="hero">
        <h1>Let's talk!</h1>
        <p>
          You can also reach me at
          <a href="mailto:iam@dcwds.co">iam@dcwds.co</a>
        </p>
      </section>

      <section className="body">
        <ContactForm />
      </section>
    </main>
  </Layout>
)

export default ContactPage
