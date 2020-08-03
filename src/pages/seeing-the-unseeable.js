import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="How to see the unseeable" />
    <h1 style={{ fontFamily: `"Work Sans", sans-serif` }}>
      How to see the unseeable
    </h1>
    <p>
      What happens when you give high schoolers 20 minutes, a bunch of esoteric
      Wikipedia clippings, and 36 tubs of play-doh?
    </p>
    <h2>They mold together new kinds of visualizations!</h2>
    <p>
      Carnegie Mellon's first{" "}
      <a href="https://cmusplash.learningu.org/">SPLASH</a> was in February
      2020. SPLASH is a unique event hosted at many R1 schools across the
      country that exposes high schoolers to campus and college-level topics
      taught by undergrads.
    </p>
    <p>
      My course was on visual thinking in abstract domains. I was particularly
      inspired by Bruno Latour's essay from the 80's, Visualization and
      Cognition.
    </p>
  </Layout>
)

export default SecondPage
