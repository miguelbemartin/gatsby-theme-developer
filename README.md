# Gatsby Theme Serenity

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-serenity and it's dependencies
yarn add gatsby react react-dom gatsby-theme-serenity
```

Then add the theme to your `gatsby-config.js`. 

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-serenity",
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
