import React from "react"
import { graphql } from "gatsby"
import LayoutArticle from "../components/LayoutArticle";
import ArticleDetail from "../components/ArticleDetail";

const IndexTemplate = ({ data, pageContext }) => {

    const site = data.site.siteMetadata;
    const article = data.markdownRemark.frontmatter;
    const strings = pageContext.strings;

    return <LayoutArticle
            title={`${article.title} - ${site.title}`}
            description={article.description}
            strings={strings}>
            <ArticleDetail
                title={article.title}
                slug={article.slug}
                date={article.date}
                content={data.markdownRemark.html}/>
        </LayoutArticle>
}


export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
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


export default IndexTemplate