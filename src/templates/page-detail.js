import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import PageDetail from "../components/PageDetail";
import Sidebar from "../components/Sidebar";
import useSiteMetadata from "../hooks/use-site-metadata";

const PageTemplate = ({ data, pageContext }) => {
    const {
        title,
        description,
        author,
        links
    } = useSiteMetadata();

    const page = data.markdownRemark.frontmatter;
    const htmlContent = data.markdownRemark.html;
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
                    content={htmlContent}/>
    </Layout>
}

export const query = graphql`
  query PageBySlug($slug: String!) {
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