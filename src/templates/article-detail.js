import React from "react"
import { graphql } from "gatsby"
import LayoutArticle from "../components/LayoutArticle";
import ArticleDetail from "../components/ArticleDetail";
import useSiteMetadata from "../hooks/use-site-metadata";
import Author from "../components/Author";

const IndexTemplate = ({ data }) => {
    const {
        title,
        description,
        author
    } = useSiteMetadata();

    const article = data.markdownRemark.frontmatter;
    const htmlContent = data.markdownRemark.html
    const metaTitle = `${article.title} - ${title}`;

    return <LayoutArticle
            metaTitle={metaTitle}
            metaDescription={article.description ? article.description : description}
            metaUrlPath={article.slug}
            metaPreviewImage={article.coverImage}>
            <ArticleDetail
                title={article.title}
                slug={article.slug}
                date={article.date}
                coverImage={article.coverImage}
                coverImageCaption={article.coverImageCaption}
                content={htmlContent}/>
            <Author author={author}/>
        </LayoutArticle>
}


export const query = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date
        description
        tags
        title
        slug
        coverImage
        coverImageCaption
      }
    }
  }
`;


export default IndexTemplate