import React from 'react';
import "../styles/main.scss"
import Meta from "./HelmetMeta";
import useStrings from "../hooks/use-strings";

export default ({ children, metaTitle, metaDescription, metaPreviewImage="", metaUrlPath="" }) => {
    const strings = useStrings();

    return <div className={"container detail"}>
        <Meta metaTitle={metaTitle}
              metaDescription={metaDescription}
              coverImage={metaPreviewImage}
              urlPath={metaUrlPath}/>

        <section className="back">
            <a className={"btn btn-light btn-sm"}
               href={"/"}
               title={strings.back_to_home}>{strings.back_to_home}</a>
        </section>

        <section className="row">
            <div className="col-lg-8 offset-lg-2">
                {children}
            </div>
        </section>
    </div>
}