import React from 'react';
import "../styles/main.scss"
import Meta from "./Meta";

const Layout = ({ children, title, description, strings }) => (
    <div className={"container detail"}>
        <Meta title={title} description={description}/>

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