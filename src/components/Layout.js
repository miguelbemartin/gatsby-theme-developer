import React from 'react';
import Meta from './Meta';
import "../styles/main.scss"

export default ({ children, sidebar, metaTitle, metaDescription, metaPreviewImage="", metaUrlPath="" }) =>
    <div className={"container"}>
        <Meta metaTitle={metaTitle}
              metaDescription={metaDescription}
              coverImage={metaPreviewImage}
              urlPath={metaUrlPath}/>

        <div className="row">
            <aside className="col-lg-3">
                {sidebar}
            </aside>
            <div className="col-lg-8 offset-lg-1">
                {children}
            </div>
        </div>
    </div>