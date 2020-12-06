import React from 'react';
import "../styles/main.scss"
import Meta from "./Meta";

export default ({ children, title, description, strings, metaPreviewImage="", metaUrlPath="" }) =>
    <div className={"container detail"}>
        <Meta title={title}
              description={description}
              coverImage={metaPreviewImage}
              urlPath={metaUrlPath}/>

        <section className="back">
            <a className={"btn btn-light btn-sm"} href={"/"} title={title}>{strings.back}</a>
        </section>

        <section className="row">
            <div className="col-lg-8 offset-lg-2">
                {children}
            </div>
        </section>
    </div>