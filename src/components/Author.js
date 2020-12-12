import React from "react";
import AuthorLinks from "./AuthorLinks";
import useStrings from "../hooks/use-strings";

export default ({author}) => {
    const strings = useStrings();

    return <section className={"author"}>
        {author.bio && <p>{author.bio}</p>}
        <p className={"links_follow"}>{strings.follow_the_author.replace("%s", author.name)}</p>
        <AuthorLinks author={author}/>
    </section>
}