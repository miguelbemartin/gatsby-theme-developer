import React from 'react';
import moment from "moment";

export default ({ title, content }) =>
    <article className={"page detail"}>
        <header>
            <h1>{title}</h1>
        </header>

        <section dangerouslySetInnerHTML={{__html: content}}/>
    </article>
