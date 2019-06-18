import React from "react"
import Layout from "../layout"

import SEO from "../components/seo"
import { SEOContactSuccessPage } from "../seo-config"

const ContactSuccessPage = () => (
  <Layout>
    <SEO
      title={SEOContactSuccessPage.title}
      description={SEOContactSuccessPage.description}
    />

    <h1>Your message made it to my inbox.</h1>
    <p>Thanks for reaching out! I'll respond as soon as possible. :-)</p>
  </Layout>
)

export default ContactSuccessPage
