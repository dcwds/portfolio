import React from "react"

import SEO from "../components/seo"
import { SEOContactSuccessPage } from "../seo-config"

const ContactSuccessPage = () => (
  <>
    <SEO
      title={SEOContactSuccessPage.title}
      description={SEOContactSuccessPage.description}
    />

    <h1>Your message made it to my inbox.</h1>
    <p>Thanks for reaching out! I'll respond as soon as possible. :-)</p>
  </>
)

export default ContactSuccessPage
