import React from 'react';
import useFormattedDate from "../hooks/use-formatted-date";

export default ({title, date, content, coverImage = "", coverImageCaption = ""}) => {
  const formattedDate = useFormattedDate(date, "MMMM Do, YYYY");

  return <article className={"article detail"}>
    <header>
      <h1>{title}</h1>
      <time pubdate={"yes"} dateTime={date}>{formattedDate}</time>
    </header>

    {coverImage && <figure className={"cover"}>
      <img src={coverImage} alt={title}/>
      {coverImageCaption && <figcaption dangerouslySetInnerHTML={{__html: coverImageCaption}}></figcaption>}
    </figure>}

    <section dangerouslySetInnerHTML={{__html: content}}/>

  </article>
}

