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

    <div className="content">
      <section className="hero">
        <h1>Let's talk!</h1>
        <p>
          You can also reach me at <a href="mailto:iam@dcwds.co">iam@dcwds.co</a>
        </p>
      </section>

      <section className="body">
        <ContactForm />
      </section>
    </div>
  </Layout>
)
