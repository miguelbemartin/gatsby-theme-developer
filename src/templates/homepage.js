import React from "react"
import Header from "../components/Header";
import useSiteMetadata from "../hooks/use-site-metadata";
import Meta from "../components/HelmetMeta";

const HomepageTemplate = ({ data, location }) => {
  const {
    title,
    subtitle,
    description,
    links
  } = useSiteMetadata();

  const header = <Header
    title={title}
    subtitle={subtitle}
    description={description}
    links={links}
    location={location}/>

  const metaTitle = `${title}`;


  return <div className="container">
    <Meta metaTitle={metaTitle}/>

    <div className="row">
      <div className="col-lg-12">
        {header}
      </div>
    </div>

    <section className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="intro">{description}</div>
      </div>
    </section>
  </div>


}

export default HomepageTemplate
