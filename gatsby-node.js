const path = require("path")
const config = require("./config.js")
const strings = require("./strings.js")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              template
              slug
            }
          }
        }
      }
    }`);

    const stringsToContext = strings[config.language] ? strings[config.language] : strings["en"];

    result.data.allMarkdownRemark.edges.forEach( edge => {
        if (edge.node.frontmatter.template === 'page') {
            createPage({
                path: edge.node.frontmatter.slug,
                component: path.resolve('./src/templates/page-detail.js'),
                context: {
                    slug: edge.node.frontmatter.slug,
                    strings: stringsToContext,
                    author: config.author,
                    links: config.links
                }
            });
        } else if (edge.node.frontmatter.template === 'post') {
            createPage({
                path: edge.node.frontmatter.slug,
                component: path.resolve('./src/templates/article-detail.js'),
                context: {
                    slug: edge.node.frontmatter.slug,
                    strings: stringsToContext
                }
            });
        }
    })

    const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / config.articles_per_page);

    for (let i = 0; i < numPages; i += 1) {
        createPage({
            path: i === 0 ? '/' : `/page/${i}`,
            component: path.resolve('./src/templates/article-archive.js'),
            context: {
                currentPage: i,
                postsLimit: config.articles_per_page,
                postsOffset: i * config.articles_per_page,
                prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
                nextPagePath: `/page/${i + 1}`,
                hasPrevPage: i !== 0,
                hasNextPage: i !== numPages - 1,
                strings: stringsToContext,
                author: config.author,
                links: config.links
            }
        });
    }

};
