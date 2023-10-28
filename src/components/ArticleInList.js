import React from 'react';
import {Link} from "gatsby"
import useFormattedDate from "../hooks/use-formatted-date";

export default ({title, slug, date, description, coverImage = ""}) => {
  const formattedDate = useFormattedDate(date, "MMMM Do, YYYY");

  return <article>
    <section className="row">
      <div className="col-lg-8 offset-lg-2">
        <Link title={title} to={slug}>
          <h2>{title}</h2>
          <small className={"date"}>
            <time pubdate={"yes"} dateTime={date}>{formattedDate}</time>
          </small>
          <p>{description}</p>
        </Link>
      </div>
    </section>
  </article>
}

