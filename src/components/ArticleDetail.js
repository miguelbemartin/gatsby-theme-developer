import React from 'react';
import moment from "moment";

export default ({ title, slug, date, content }) =>
    <article className={"article detail"}>
        <header>
            <h1>{title}</h1>
            <time pubdate={"yes"}
                dateTime={date}>{moment(date).format("DD-MM-YYYY")}</time>
        </header>

        <section dangerouslySetInnerHTML={{__html: content}}/>
    </article>
