import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { SEOContactSuccessPage } from "../seo-config"

const ContactSuccessPage = () => (
  <Layout>
    <SEO
      title={SEOContactSuccessPage.title}
      description={SEOContactSuccessPage.description}
    />

    <main className="content page-contact-success">
      <h1>Your message made it to my inbox.</h1>
      <p>Thanks for reaching out! I'll respond as soon as possible. :-)</p>
    </main>
  </Layout>
)

export default ContactSuccessPage
