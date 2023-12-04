import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { H1 } from "../components/Heading";
import "../pages/styles/global.css"

const BlogPost = ({ data }) => {
  const { title, body, heroImage, publishDate, tags } = data.contentfulBlogPost;

  return (
    <Layout>
      <GatsbyImage className="mainImg"
        image={heroImage.gatsbyImageData} >
      </GatsbyImage>
        <H1 className="mainTitle">{title}</H1>
        <h3>Published: {publishDate}</h3>
        <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        <h3>Tags: {tags} </h3>
      </Layout>
  );
}
export default BlogPost;

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 960)
      }
      publishDate(formatString: "DD MMMM, YYYY")
      tags
    }
  }
`

