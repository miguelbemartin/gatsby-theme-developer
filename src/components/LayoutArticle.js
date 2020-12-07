import React from 'react';
import "../styles/main.scss"
import Meta from "./Meta";
import {Helmet} from "react-helmet";

export default ({ children, metaTitle, metaDescription, strings, metaPreviewImage="", metaUrlPath="" }) =>
    <div className={"container detail"}>
        <Helmet>
            <Meta metaTitle={metaTitle}
                  metaDescription={metaDescription}
                  coverImage={metaPreviewImage}
                  urlPath={metaUrlPath}/>
        </Helmet>

        <section className="back">
            <a className={"btn btn-light btn-sm"} href={"/"} title={strings.back}>{strings.back}</a>
        </section>

        <section className="row">
            <div className="col-lg-8 offset-lg-2">
                {children}
            </div>
        </section>
    </div>