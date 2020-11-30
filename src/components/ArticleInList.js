import React from 'react';
import { Link } from "gatsby"
import useFormattedDate from "../hooks/use-formatted-date";

export default ({ title, slug, date, description }) => {
    const formattedDate = useFormattedDate(date, "DD-MM-YYYY");

    return <article>
        <small className={"date"}>
            <time pubdate={"yes"}
                  dateTime={date}>{formattedDate}</time>
        </small>
        <Link title={title}
              to={slug}>
            <h2>{title}</h2>
        </Link>
        <p>{description}</p>
    </article>
}

