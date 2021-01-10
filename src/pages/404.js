import React from "react"
import Layout from "../components/Layout";
import PageDetail from "../components/PageDetail";
import Header from "../components/Header";
import useSiteMetadata from "../hooks/use-site-metadata";
import useStrings from "../hooks/use-strings";

export default () => {
    const {
        title,
        subtitle,
        description,
        author,
        links,
        language
    } = useSiteMetadata();
    const strings = useStrings(language);
    const header = <Header
        title={title}
        subtitle={subtitle}
        description={description}
        links={links}
        author={author}/>

    return <Layout header={header}
        title={strings.not_found_title + " " + title}
        description={strings.not_found_content}>
        <PageDetail
            title={strings.not_found_title}
            content={strings.not_found_content}/>
    </Layout>
}