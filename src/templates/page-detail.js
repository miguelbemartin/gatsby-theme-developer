import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import PageDetail from "../components/PageDetail";
import Sidebar from "../components/Sidebar";
import useSiteMetadata from "../hooks/use-site-metadata";
import LayoutArticle from "../components/LayoutArticle";

const PageTemplate = ({ data }) => {
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
        metaTitle={`${page.title} - ${title}`}
        metaDescription={page.description ? page.description : description}
        metaUrlPath={page.slug}
        metaPreviewImage={page.coverImage}>
        <PageDetail title={page.title}
                    slug={page.slug}
                    date={page.date}
                    coverImage={page.coverImage}
                    content={htmlContent}/>
    </Layout>
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        description
        title
        slug
        coverImage
      }
    }
  }
`;

export default PageTemplate