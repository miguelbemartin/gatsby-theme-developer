const defaultConfig = require("./config.js")

module.exports = themeOptions => {

    const config = Object.assign(defaultConfig, themeOptions);

    return {
        siteMetadata: {
            title: config.title,
            subtitle: config.subtitle,
            description: config.description,
            language: config.language,
            siteUrl: config.siteUrl,
            icon: config.icon,
            defaultPreviewImage: config.defaultPreviewImage,
            articlesPerPage: config.articlesPerPage,
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
                    footnotes: true,
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
                        'Oxygen\:300,400,900',
                        'Nunito'
                    ],
                    display: 'swap'
                }
            },
            {
                resolve: `gatsby-plugin-feed`,
                options: {
                    query: `
                      {
                        site {
                          siteMetadata {
                            siteUrl
                            title
                            subtitle
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
                                        title: site.siteMetadata.title + " " + site.siteMetadata.subtitle,
                                        date: edge.node.frontmatter.date,
                                        url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                                        guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
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
