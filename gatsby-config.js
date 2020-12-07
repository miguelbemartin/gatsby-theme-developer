const defaultConfig = require("./config.js")

module.exports = themeOptions => {

    const config = Object.assign(defaultConfig, themeOptions);

    return {
        siteMetadata: {
            title: config.title,
            description: config.description,
            language: config.language,
            site_url: config.site_url,
            default_preview_image: config.default_preview_image,
            articles_per_page: config.articles_per_page,
            author: config.author,
            links: config.links
        },
        plugins: [
            {
                resolve: "gatsby-source-filesystem",
                options: {
                    path: "content",
                },
            },
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    path: `static/media`,
                    name: 'media'
                }
            },
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    name: 'assets',
                    path: `static`
                }
            },
            {
                resolve: "gatsby-transformer-remark",
                options: {
                    commonmark: true,
                    footnotes: true,
                    pedantic: true,
                    gfm: true,
                    plugins: [
                        {
                            resolve: `gatsby-remark-prismjs`,
                            options: {
                                classPrefix: "language-",
                                inlineCodeMarker: null,
                                aliases: {},
                                showLineNumbers: false,
                                noInlineHighlight: false,
                                languageExtensions: [
                                    {
                                        language: "superscript",
                                        extend: "javascript",
                                        definition: {
                                            superscript_types: /(SuperType)/,
                                        },
                                        insertBefore: {
                                            function: {
                                                superscript_keywords: /(superif|superelse)/,
                                            },
                                        },
                                    },
                                ],
                                prompt: {
                                    user: "root",
                                    host: "localhost",
                                    global: false,
                                },
                                escapeEntities: {},
                            },
                        },
                    ],
                },
            },
            'gatsby-plugin-react-helmet',
            {
                resolve: 'gatsby-plugin-sass',
                options: {
                    cssLoaderOptions: {
                        camelCase: false,
                    }
                }
            },
            {
                resolve: `gatsby-plugin-google-fonts`,
                options: {
                    fonts: [
                        'Fira Sans\:300,400,400i',
                        'Merriweather'
                    ],
                    display: 'swap'
                }
            },
            `gatsby-plugin-twitter`,
            {
                resolve: `gatsby-plugin-feed`,
                options: {
                    query: `
                      {
                        site {
                          siteMetadata {
                            site_url
                            title
                            description
                          }
                        }
                      }
                    `,
                    feeds: [
                        {
                            serialize: ({ query: { site, allMarkdownRemark } }) => {
                                return allMarkdownRemark.edges.map(edge => {
                                    return Object.assign({}, edge.node.frontmatter, {
                                        date: edge.node.frontmatter.date,
                                        url: site.siteMetadata.site_url + edge.node.frontmatter.slug,
                                        guid: site.siteMetadata.site_url + edge.node.frontmatter.slug,
                                        custom_elements: [{ "content:encoded": edge.node.html }],
                                    })
                                })
                            },
                            query: `
                              {
                                allMarkdownRemark(
                                  limit: 1000,
                                  sort: { order: DESC, fields: [frontmatter___date] },
                                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                                ) {
                                  edges {
                                    node {
                                      html
                                      frontmatter {
                                        title
                                        date
                                        template
                                        draft
                                        slug
                                        description
                                      }
                                    }
                                  }
                                }
                              }
                            `,
                            output: "/rss.xml",
                            title: `${config.title} RSS Feed`,
                        },
                    ],
                },
            },
        ],
    }
}
