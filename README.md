# Gatsby Minimal Theme for Developers

## Demo

You can find here a demo website: https://www.miguelangelmartin.me

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init

# install gatsby-developer-theme and it's dependencies
yarn add gatsby react react-dom gatsby-theme-developer
```

You can add now the yarn scripts to your `package.json` file

```json
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
            resolve: "gatsby-theme-developer",
            options: {
                title: "Title of your site",
                subtitle: "a short subtitle for the meta title on the home page",
                description: "A minimal theme for your personal blog or webpage",
                siteUrl: "https://...com",
                defaultPreviewImage: "/og-default.png",
                author: {
                    name: "Your Name",
                    bio: "Software Engineer",
                    avatar: "https://mywebsite.com",
                    links: {
                        twitter: "https://twitter.com/username",
                        linkedin: "https://linkedin.com/in/username",
                        github: "https://github.com/username",
                        instagram: "https://instagram.com/username",
                        mail: "mailto:username@email.com"
                    }
                },
                links: [
                    {
                        title: "Home",
                        href: "/"
                    },
                    {
                        title: "About me",
                        href: "/about-me"
                    },
                    {
                    title: "Blog",
                    href: "/blog"
                    }
                ],
                articlesPerPage: 4,
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
tags: Writing
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

