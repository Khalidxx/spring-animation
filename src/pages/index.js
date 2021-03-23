import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/react-spring">React Spring Demo</Link>
      <br />
      <Link to="/react-transition">React Transition Group Demo</Link>
      
    </Layout>
  )
}

export default IndexPage
