const strings = require("./strings.js")
const fs = require("fs")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
        site {
          siteMetadata {
            title
            description
            language
            articles_per_page
            author {
              links {
                twitter
                linkedin 
                mail 
                github
                instagram
              }
            }
            links {
              title
              href
            }
          }
        }
        allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
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

    const {
        language,
        articles_per_page,
        author,
        links
    } = result.data.site.siteMetadata;

    const stringsToContext = strings[language] ? strings[language] : strings["en"];

    result.data.allMarkdownRemark.edges.forEach( edge => {
        if (edge.node.frontmatter.template === 'page') {
            createPage({
                path: edge.node.frontmatter.slug,
                component: require.resolve('./src/templates/page-detail.js'),
                context: {
                    slug: edge.node.frontmatter.slug,
                    strings: stringsToContext,
                    author: author,
                    links: links
                }
            });
        } else if (edge.node.frontmatter.template === 'post') {
            createPage({
                path: edge.node.frontmatter.slug,
                component: require.resolve('./src/templates/article-detail.js'),
                context: {
                    slug: edge.node.frontmatter.slug,
                    strings: stringsToContext
                }
            });
        }
    })

    const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / articles_per_page);

    for (let i = 0; i < numPages; i += 1) {
        createPage({
            path: i === 0 ? '/' : `/page/${i}`,
            component: require.resolve('./src/templates/article-archive.js'),
            context: {
                currentPage: i,
                postsLimit: articles_per_page,
                postsOffset: i * articles_per_page,
                prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
                nextPagePath: `/page/${i + 1}`,
                hasPrevPage: i !== 0,
                hasNextPage: i !== numPages - 1,
                strings: stringsToContext,
                author: author,
                links: links
            }
        });
    }

};

exports.onPreBootstrap = ({ reporter }) => {
    const dirs = ["content", "static", "static/media"];
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            reporter.info(`creating the ${dir} directory`)
            fs.mkdirSync(dir)
        }
    });
};