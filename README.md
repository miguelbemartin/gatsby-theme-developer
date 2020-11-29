# Gatsby Serenity Theme

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-serenity-theme and it's dependencies
yarn add gatsby react react-dom gatsby-serenity-theme
```

Then add the theme to your `gatsby-config.js`. 

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-serenity-theme",
      options: {
           title: "Serenity 平静",
           description: "A minimal theme for your personal blog or webpage",
           author: {
             name: "Asier Marqués",
             bio: "Software Engineer",
             links: {
                 twitter: "https://twitter.com/asiermarques",
                 linkedin: "https://linkedin.com/in/asier",
                 github: "https://github.com/asiermarques",
                 instagram: "https://instagram.com/asiermarques",
                 mail: ""
             }
           },
           links: [
               {
                   title: "Articles",
                   href: "/"
               },
               {
                   title: "About me",
                   href: "/info/about-me"
               },
           ],
           articles_per_page: 4,
           language: "en"
       },
    },
  ],
}
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

Note that this site doesn't _do_ anything, so you're seeing a missing
resources error. Create a simple page in `src/pages/articles.js` to see a
page on the root url.

```jsx
import React from "react"

export default function Home() {
  return <div>My Site!</div>
}
```

## Doing more with themes

You can use this as a place to start when developing themes. I
generally suggest using [yarn
workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) like the
[gatsby-theme-examples repo
does](https://github.com/ChristopherBiscardi/gatsby-theme-examples),
but using `yarn link` or `npm link` is a viable alternative if you're
not familiar with workspaces.
