# Gatsby Theme Serenity 平静


[![CircleCI](https://circleci.com/gh/asiermarques/gatsby-theme-serenity.svg?style=svg)](https://circleci.com/gh/asiermarques/gatsby-theme-serenity) 
[![Current npm package version.](https://img.shields.io/npm/v/gatsby-theme-serenity.svg)](https://www.npmjs.com/package/gatsby-theme-serenity)

## Demo

You can see [my personal blog using this theme](https://asiermarques.com) and 
[the Github repository with the configuration and content](https://github.com/asiermarques/website)


## Quick Start

```shell
mkdir my-site
cd my-site
yarn init

# install gatsby-theme-serenity and it's dependencies
yarn add gatsby react react-dom gatsby-theme-serenity
```

You can add now the yarn scripts to your `package.json` file

```javascript
{
  "scripts": {
    "build": "gatsby build",
    "clean": "gatsby clean",
    "develop": "gatsby develop"
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
           subtitle: "a short subtitle for the meta title on the home page",
           description: "A minimal theme for your personal blog or webpage",
           siteUrl: "https://asiermarques.com",
           defaultPreviewImage: "/og-default.png",
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

This will run a local web server and create the `content` and `static` folders with all the required files to run your website.

## Adding content

The content need to be stored in the `content` directory as markdown files.

Every markdown file need to have a frontmatter section in it. Here is an example:

```markdown
---
date: 2020-11-20 00:30:03+00:00
slug: /2020/hello-world/
title: Hello World
template: post
coverImage: /the-image.jpg
tags:
  - Writing
draft: false
description: "This is your first article, you can find it in the /content directory"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu lorem eget metus venenatis dignissim.

```

As you see the frontmatter section has some variables, some are required but others not

| variable           | required   | description                                                                   |
|--------------------|------------|-------------------------------------------------------------------------------|
| date               | true       | the ISO 8601 date of the article or page YYYY-MM-DD HH:mm:ss±hh:mm |
| slug               | true       | the path for the article or page, for example /2020/hello-world |
| title              | true       | the title of the article or page |
| description        | false      | the description for the article or page |
| draft              | true       | is the article is published or not |
| template           | true       | the template: the possible values are: post or page |
| coverImage         | false      | the cover image for the article |
| tags               | false      | an array of YAML tags |

