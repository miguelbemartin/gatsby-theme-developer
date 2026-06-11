import React from "react";
import {Link} from "gatsby";
import useIsCurrentPage from "../hooks/use-is-current-page";
import useDarkMode from "../hooks/use-dark-mode";

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.591-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 6.166a.75.75 0 000 1.06l1.59 1.592a.75.75 0 001.061-1.061L7.227 6.166a.75.75 0 00-1.06 0z"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
  </svg>
);

export default ({title, links, location}) => {
  const { isDark, toggle } = useDarkMode();

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

      <button
        className="theme-toggle"
        onClick={toggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  </header>
}
