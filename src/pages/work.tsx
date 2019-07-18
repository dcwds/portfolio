import React from "react"

import SEO from "../components/seo"
import { SEOWorkPage } from "../seo-config"

const WorkPage = () => (
  <>
    <SEO title={SEOWorkPage.title} description={SEOWorkPage.description} />

    <section className="hero">
      <h1>Work</h1>
    </section>
  </>
)

export default WorkPage
