import React from "react";
import { Link } from "gatsby";
import useIsCurrentPage from "../hooks/use-is-current-page";

export default ({ title, links, location }) => {
  return <header>
    <nav className="navbar navbar-expand-lg">
      <Link to={"/"} title={title}>
        <h1>{title}</h1>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {links.length > 0 && (
          <ul className="navbar-nav ml-auto">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  className={
                    "nav-link " +
                    (useIsCurrentPage(link.href, location) ? "active" : "")
                  }
                  href={link.href}
                  title={link.title}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>

  </header>
}
