import React from "react"
import Layout from "../layout"

import SEO from "../components/seo"
import { SEOIndexPage } from "../seo-config"

import Availability from "../components/availability"
import Emoji from "../components/emoji"
import MailLink from "../components/mail-link"

import styles from "../styles/pages/index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title={SEOIndexPage.title} description={SEOIndexPage.description} />

    <main className="content page-home">
      <section className={styles.hero}>
        <p className={styles.lineHello}>
          Hello! Hallo! <Emoji label="wave" symbol="🖐️" />
        </p>
        <p className={styles.lineName}>I'm Dalton.</p>
        <p className={styles.lineAbout}>
          I'm a product designer &amp; front-end developer based in Virginia.
        </p>

        <MailLink className={styles.callToAction} address="hello@dcwds.co" />

        <Availability className={styles.availability} available={true} />
      </section>
    </main>
  </Layout>
)

export default IndexPage
