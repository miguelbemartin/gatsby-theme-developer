import React from "react";
import useAvailableAuthorLinks from "../hooks/use-available-author-links";

export default ({author}) => {
  const availableAuthorLinks = useAvailableAuthorLinks();

  return <p className={"authorLinks"}>
    {availableAuthorLinks.map((link) =>
      author.links[link.key] &&
      <a key={link.key}
         href={author.links[link.key]}
         title={link.key}>{link.icon}</a>
    )}
  </p>
}
