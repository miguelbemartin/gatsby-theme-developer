import React from 'react';
import { Link } from "gatsby"
import {FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaInstagram} from "react-icons/fa";

const availableAuthorLinks = [
    { key: "twitter", icon: <FaTwitter/> },
    { key: "github", icon: <FaGithub/> },
    { key: "linkedin", icon: <FaLinkedin/> },
    { key: "instagram", icon: <FaInstagram/> },
    { key: "mail", icon: <FaEnvelope/> }
]

export default ({ title, description, links, author }) =>
    <>
        <header>
            <h1>{title}</h1>
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
                    <Link key={link.key}
                          to={author.links[link.key]}
                          title={link.key}>{link.icon}</Link>
            )}
        </p>
    </>