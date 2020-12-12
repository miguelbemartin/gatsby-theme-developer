import React from 'react';
import { Link } from "gatsby"
import AuthorLinks from "./AuthorLinks";
import useIsCurrentPage from "../hooks/use-is-current-page";

export default ({ title, subtitle, description, links, author, location }) => <>
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
                <a className={"nav-link " + (useIsCurrentPage(link.href, location)?"active":"")}
                   href={link.href}
                   title={link.title}>{link.title}</a>
            </li>)}
        </ul>
        }

        <AuthorLinks author={author}/>
    </>


