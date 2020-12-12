import React from 'react';
import { Link } from "gatsby"
import AuthorLinks from "./AuthorLinks";

export default ({ title, subtitle, description, links, author }) => {
    return <>
        <header>
            <Link
                to={"/"}
                title={title}>
                <h1>{title}</h1>
            </Link>
            {description && <p>{description}</p>}
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

        <AuthorLinks author={author}/>
    </>
}
