import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import PageDetail from "../components/PageDetail";
import Sidebar from "../components/Sidebar";

const PageTemplate = ({ data, pageContext }) => {
    const {
        title,
        description
    } = data.site.siteMetadata;

    const {
        strings,
        links,
        author,
    } = pageContext;


    const page = data.markdownRemark.frontmatter;

    const sidebar = <Sidebar
        title={title}
        description={description}
        links={links}
        author={author}/>

    return <Layout
        sidebar={sidebar}
        title={title}
        description={description}>
        <PageDetail title={page.title}
                    slug={page.slug}
                    date={page.date}
                    content={data.markdownRemark.html}/>
    </Layout>
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date
        description
        tags
        title
        slug
      }
    }
  }
`;

export default PageTemplate