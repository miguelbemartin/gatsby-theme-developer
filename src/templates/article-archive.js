import React from "react"
import { graphql } from "gatsby"
import ArticleInList from "../components/ArticleInList";
import Pagination from "../components/Pagination";
import Layout from "../components/Layout";
import Header from "../components/Header";
import useSiteMetadata from "../hooks/use-site-metadata";

const IndexTemplate = ({ data, pageContext, location }) => {
    const {
        title,
        subtitle,
        description,
        links,
        author,
    } = useSiteMetadata();

    const {
        hasNextPage,
        hasPrevPage,
        prevPagePath,
        nextPagePath,
        currentPagePath,
    } = pageContext;

    const header = <Header
        title={title}
        subtitle={subtitle}
        description={description}
        links={links}
        author={author}
        location={location}/>

    const metaTitle = title + (subtitle? " - " + subtitle : "");

    return <Layout
        header={header}
        metaTitle={metaTitle}
        metaDescription={description}
        metaUrlPath={currentPagePath}>
        <section className="article-list">
            {data.allMarkdownRemark.edges.map( (node, index) =>
                <ArticleInList key={index}
                    title={node.node.frontmatter.title}
                    slug={node.node.frontmatter.slug}
                    date={node.node.frontmatter.date}
                    description={node.node.frontmatter.description}
                    coverImage={node.node.frontmatter.coverImage}
                />
            )}
            <Pagination
                nextPagePath={nextPagePath}
                prevPagePath={prevPagePath}
                hasNextPage={hasNextPage}
                hasPrevPage={hasPrevPage}/>
        </section>
    </Layout>
}

export const query = graphql`
  query ArticleArchive($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          frontmatter {
            slug
            title
            date
            description
            coverImage
          }
        }
      }
    }
  }
`;

export default IndexTemplate