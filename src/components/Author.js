import React from "react";
import AuthorLinks from "./AuthorLinks";

export default ({author}) => {
  return <section className={"author"}>
    <img className={"avatar"} width="120px" height="120px" src={author.avatar} alt=""/>
    <h2>{author.name}</h2>
    {author.bio && <p>{author.bio}
      <AuthorLinks author={author}/></p>}
  </section>
}
