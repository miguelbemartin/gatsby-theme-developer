import React from "react"
import Layout from "../components/Layout";
import PageDetail from "../components/PageDetail";
import Sidebar from "../components/Sidebar";
import {graphql} from "gatsby";

const Page404 = ({data}) => {
    const {
        title,
        description,
        author,
        links
    } = data.site.siteMetadata;

    const sidebar = <Sidebar
        title={title}
        description={description}
        links={links}
        author={author}/>

    return <Layout sidebar={sidebar}
        title={"Not found"}
        description={"Content not found"}>
        <PageDetail
            title={"404 Not found"}
            content={"Content not found"}/>
    </Layout>
}

export const query = graphql`
  query Page404 {
    site {
      siteMetadata {
        title
        description
        author {
          links {
            twitter
            linkedin 
            mail 
            github
            instagram
          }
        }
        links {
          title
          href
        }
      }
    }
  }
`;

export default Page404