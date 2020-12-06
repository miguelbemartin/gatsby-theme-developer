# Gatsby Theme Serenity 平静

[![Current npm package version.](https://img.shields.io/npm/v/gatsby-theme-serenity.svg)](https://www.npmjs.com/package/gatsby-theme-serenity)

## Demo

You can see [my personal blog using this theme](https://asiermarques-serenity-theme.netlify.app) and 
[the Github repository with the configuration and content](https://github.com/asiermarques/website/tree/serenity-beta)


## Quick Start

```shell
mkdir my-site
cd my-site
yarn init

# install gatsby-theme-serenity and it's dependencies
yarn add gatsby react react-dom gatsby-theme-serenity
```

Recommended: you can add scripts to your `package.json` file

```javascript
{
  "dependencies": {
    "gatsby": "^2.28.0",
    "gatsby-theme-serenity": "^1.1.13",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "scripts": {
    "develop": "yarn run clean && gatsby develop",
    "build": "yarn run clean && gatsby build",
    "clean": "gatsby clean"
  }
}
```

Then create the `gatsby-config.js` file:

```shell
touch gatsby-config.js
```

And add the theme configuration to it:

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-serenity",
      options: {
           title: "Serenity 平静",
           description: "A minimal theme for your personal blog or webpage",
           site_url: "https://asiermarques.com",
           default_preview_image: "/og-default.png",
           author: {
               name: "Asier Marqués",
               bio: "Software Engineer",
               url: "https://asiermarques.com",
               links: {
                   twitter: "https://twitter.com/asiermarques",
                   linkedin: "https://linkedin.com/in/asier",
                   github: "https://github.com/asiermarques",
                   instagram: "https://instagram.com/asiermarques",
                   mail: "mailto:asiermarques@gmail.com"
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
yarn develop
```

## ToDo

- [] Implement the cover image in the theme
- [] Add metaTitle and metaDescription additional in addition of title and description siteMeta fields
- [] Add RSS Feed
- [] Add sitemap.xml
- [] Author image
- [] Improve the footer