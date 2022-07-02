import React from "react";
import AuthorLinks from "./AuthorLinks";
import useStrings from "../hooks/use-strings";

export default ({author}) => {
    const strings = useStrings();

    return <section className={"author"}>
        <img className={"avatar"} width="120px" height="120px" src="https://pbs.twimg.com/profile_images/1542864559832195072/Rim7fS8I_400x400.jpg" alt=""/>
        <h2>{author.name}</h2>
        {author.bio && <p>{author.bio}
        <AuthorLinks author={author}/></p>}
    </section>
}
