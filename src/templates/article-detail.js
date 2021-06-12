import React from "react"
import { graphql } from "gatsby"
import LayoutArticle from "../components/LayoutArticle";
import ArticleDetail from "../components/ArticleDetail";
import useSiteMetadata from "../hooks/use-site-metadata";
import Author from "../components/Author";
import Header from "../components/Header";

const IndexTemplate = ({ data, location }) => {
    const {
        title,
        subtitle,
        description,
        links,
        author
    } = useSiteMetadata();

    const header = <Header
      title={title}
      subtitle={subtitle}
      description={description}
      links={links}
      location={location}/>

    const article = data.markdownRemark.frontmatter;
    const htmlContent = data.markdownRemark.html
    const metaTitle = `${article.title} - ${title}`;

    return <LayoutArticle
            header={header}
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
