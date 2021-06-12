import React from 'react';
import "../styles/main.scss"
import Meta from "./HelmetMeta";

export default ({ children, header, metaTitle, metaDescription, metaPreviewImage="", metaUrlPath="" }) => {

    return <div className={"container detail"}>
        <Meta metaTitle={metaTitle}
              metaDescription={metaDescription}
              coverImage={metaPreviewImage}
              urlPath={metaUrlPath}/>

        <div className="row">
            <div className="col-lg-12">
                {header}
            </div>
        </div>

        <section className="row">
            <div className="col-lg-8 offset-lg-2">
                {children}
            </div>
        </section>
    </div>
}
