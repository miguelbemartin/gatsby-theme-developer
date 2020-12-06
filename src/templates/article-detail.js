import React from "react"
import { graphql } from "gatsby"
import LayoutArticle from "../components/LayoutArticle";
import ArticleDetail from "../components/ArticleDetail";
import useSiteMetadata from "../hooks/use-site-metadata";
import useStrings from "../hooks/use-strings";

const IndexTemplate = ({ data }) => {
    const {
        title,
        language,
        description
    } = useSiteMetadata();

    const article = data.markdownRemark.frontmatter;
    const htmlContent = data.markdownRemark.html
    const strings = useStrings(language);

    return <LayoutArticle
            metaTitle={`${article.title} - ${title}`}
            metaDescription={article.description ? article.description : description}
            strings={strings}
            metaUrlPath={article.slug}
            metaPreviewImage={article.coverImage}>
            <ArticleDetail
                title={article.title}
                slug={article.slug}
                date={article.date}
                coverImage={article.coverImage}
                content={htmlContent}/>
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
      }
    }
  }
`;


export default IndexTemplate