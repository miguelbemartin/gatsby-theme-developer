import React from 'react';
import { Link } from "gatsby"
import useFormattedDate from "../hooks/use-formatted-date";

export default ({ title, slug, date, description, coverImage = "" }) => {
    const formattedDate = useFormattedDate(date, "DD-MM-YYYY");

    return <article>
        <Link title={title}
              to={slug}>
            <small className={"date"}>
                <time pubdate={"yes"}
                      dateTime={date}>{formattedDate}</time>
            </small>
            {coverImage && <section className={"cover"} style={{"backgroundImage": `url(${coverImage})`}}/>}
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    </article>
}

