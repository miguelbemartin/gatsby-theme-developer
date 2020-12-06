import React from 'react';
import useFormattedDate from "../hooks/use-formatted-date";

export default ({ title, date, content, coverImage }) => {
    const formattedDate = useFormattedDate(date, "DD-MM-YYYY");
    
    return <article className={"article detail"}>
        <header>
            <h1>{title}</h1>
            <time pubdate={"yes"}
                  dateTime={date}>{formattedDate}</time>
        </header>

        <section dangerouslySetInnerHTML={{__html: content}}/>
    </article>
}

