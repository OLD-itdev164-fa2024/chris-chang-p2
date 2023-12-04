import * as React from "react"
import {graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Box, Card, Heading } from "rebass"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import "./styles/global.css"

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr) );
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home"></Seo>
    <Grid>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <Card className="blogContainer" width={256} p={3} key={edge.node.id}>
            <div >
              <Link to={edge.node.slug}>
              <GatsbyImage class="blogImg"
                image={edge.node.heroImage.gatsbyImageData}>
              </GatsbyImage>
              </Link>
              <Heading className="blogDesc">{edge.node.title}</Heading>
              <div className="blogDesc">
                {edge.node.description.childMarkdownRemark.excerpt}
              </div>
            </div>
          </Card>
        ))
      }
    </Grid>
  </Layout>
  
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query {
  allContentfulBlogPost {
    edges {
      node{
        slug
        heroImage {
          gatsbyImageData (
            layout: CONSTRAINED,
            placeholder: BLURRED,
            width: 600)
        }
        description{
          childMarkdownRemark{
            excerpt
          }
        }
        id
        title
      }
    }
  }
}
`
