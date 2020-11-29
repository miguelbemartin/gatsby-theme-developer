import React from 'react';
import { Link } from "gatsby"
import moment from "moment";

export default ({ title, slug, date, description }) =>
    <article>
        <small className={"date"}>
            <time pubdate={"yes"}
                  dateTime={date}>{moment(date).format("DD-MM-YYYY")}</time>
        </small>
        <Link title={title}
              to={slug}>
            <h2>{title}</h2>
        </Link>
        <p>{description}</p>
    </article>
