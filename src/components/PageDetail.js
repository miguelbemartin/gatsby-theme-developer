import React from 'react';

export default ({ title, content, coverImage }) =>
    <article className={"page detail"}>
        <header>
            <h1>{title}</h1>
        </header>

        <section dangerouslySetInnerHTML={{__html: content}}/>
    </article>
