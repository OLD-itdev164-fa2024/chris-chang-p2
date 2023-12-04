import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles/global.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = ({data}) => {
    const {name, company, address} = data.site.siteMetadata.contact;
    return(
<Layout>
    <h1 >Contact Us</h1>
    <p>Please send all inqueries to: </p>
    <div>{company}</div>
    <div>{`C/O ${name}`}</div>
    <div>{address}</div>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <StaticImage
        className="spinning"
        src="../images/gatsby-icon.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby icon"
        style={{marginBottom: `1.45rem`}}></StaticImage>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          address
          company
          name
        }
      }
    }
  }
`

export default contact