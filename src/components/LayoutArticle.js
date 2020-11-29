import React from 'react';
import Helmet from 'react-helmet';
import "../styles/main.scss"

const Layout = ({ children, title, description, strings }) => (
    <div className={"container detail"}>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Helmet>

        <section className="back">
            <a className={"btn btn-light btn-sm"} href={"/"} title={title}>{strings.back}</a>
        </section>

        <section className="row">
            <div className="col-lg-8 offset-lg-2">
                {children}
            </div>
        </section>
    </div>
);
export default Layout