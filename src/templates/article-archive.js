import React from "react"
import { graphql } from "gatsby"
import ArticleInList from "../components/ArticleInList";
import Pagination from "../components/Pagination";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import useSiteMetadata from "../hooks/use-site-metadata";

const IndexTemplate = ({ data, pageContext }) => {
    const {
        title,
        description
    } = useSiteMetadata();

    const {
        strings,
        links,
        author,
        hasNextPage,
        hasPrevPage,
        prevPagePath,
        nextPagePath
    } = pageContext;

    const sidebar = <Sidebar
        title={title}
        description={description}
        links={links}
        author={author}/>

    return <Layout
        sidebar={sidebar}
        title={title}
        description={description}>
        <section className="article-list">
            {data.allMarkdownRemark.edges.map( (node, index) =>
                <ArticleInList key={index}
                    title={node.node.frontmatter.title}
                    slug={node.node.frontmatter.slug}
                    date={node.node.frontmatter.date}
                    description={node.node.frontmatter.description}
                />
            )}
            <Pagination
                nextPagePath={nextPagePath}
                prevPagePath={prevPagePath}
                hasNextPage={hasNextPage}
                hasPrevPage={hasPrevPage}
                strings={strings}/>
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
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate