import React from 'react';
import Helmet from 'react-helmet';
import "../styles/main.scss"

export default ({ children, sidebar, title, description }) =>
    <div className={"container"}>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Helmet>

        <div className="row">
            <aside className="col-lg-3">
                {sidebar}
            </aside>
            <div className="col-lg-8 offset-lg-1">
                {children}
            </div>
        </div>
    </div>