import React from 'react';
import { Link } from "gatsby"
import useAvailableAuthorLinks from "../hooks/use-available-author-links";

export default ({ title, description, links, author }) => {
    const availableAuthorLinks = useAvailableAuthorLinks();

    return <>
        <header>
            <Link
                to={"/"}
                title={title}>
                <h1>{title}</h1>
            </Link>
            <p>{description}</p>
        </header>

        {links.length > 0 &&
        <ul className="nav flex-column">
            {links.map((link, index) => <li key={index} className="nav-item">
                <Link className={"nav-link"}
                      activeClassName={"active"}
                      to={link.href}
                      title={link.title}>{link.title}</Link>
            </li>)}
        </ul>
        }

        <p className={"authorLinks"}>
            {availableAuthorLinks.map((link) =>
                author.links[link.key] &&
                <a key={link.key}
                   href={author.links[link.key]}
                   title={link.key}>{link.icon}</a>
            )}
        </p>
    </>
}
