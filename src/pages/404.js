import React from "react"
import Layout from "../components/Layout";
import PageDetail from "../components/PageDetail";
import Sidebar from "../components/Sidebar";
import useSiteMetadata from "../hooks/use-site-metadata";
import useStrings from "../hooks/use-strings";

export default () => {
    const {
        title,
        description,
        author,
        links,
        language
    } = useSiteMetadata();
    const strings = useStrings(language);
    const sidebar = <Sidebar
        title={title}
        description={description}
        links={links}
        author={author}/>

    return <Layout sidebar={sidebar}
        title={strings.not_found_title + " " + title}
        description={strings.not_found_content}>
        <PageDetail
            title={strings.not_found_title}
            content={strings.not_found_content}/>
    </Layout>
}