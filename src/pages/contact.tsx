import React from "react"
import ContactForm from "../components/contact-form"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { SEOContactPage } from "../seo-config"

const ContactPage = () => (
  <Layout>
    <SEO
      title={SEOContactPage.title}
      description={SEOContactPage.description}
    />

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
