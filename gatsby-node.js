const fs = require("fs")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
        site {
            siteMetadata {
                articles_per_page
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

    const {articles_per_page} = result.data.site.siteMetadata;
    result.data.allMarkdownRemark.edges.forEach( edge => {
        if (edge.node.frontmatter.template === 'page') {
            createPage({
                path: edge.node.frontmatter.slug,
                component: require.resolve('./src/templates/page-detail.js'),
                context: {
                    slug: edge.node.frontmatter.slug
                }
            });
        } else if (edge.node.frontmatter.template === 'post') {
            createPage({
                path: edge.node.frontmatter.slug,
                component: require.resolve('./src/templates/article-detail.js'),
                context: {
                    slug: edge.node.frontmatter.slug
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
                hasNextPage: i !== numPages - 1
            }
        });
    }
};

exports.onPreBootstrap = ({ store, reporter }) => {
    const { program } = store.getState()
    const dirs = [
        fs.path.join(program.directory, "content"),
        fs.path.join(program.directory, "static"),
        fs.path.join(program.directory, "static/media"),
    ]
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            reporter.log(`creating the ${dir} directory`)
            fs.mkdirSync(dir)
        }
    })
};