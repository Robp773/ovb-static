import React from "react"

const About = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(markdownRemark)
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

export const query = graphql`
  {
    markdownRemark {
      timeToRead
      frontmatter {
        title
        page_main_image
      }
      html
    }
  }
`
export default About
