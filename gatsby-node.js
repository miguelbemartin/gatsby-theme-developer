const fs = require("fs");
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
        site {
            siteMetadata {
                articlesPerPage
            }
        }
        allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
            totalCount
            edges {
                node {
                    frontmatter {
                      template
                      slug
                      coverImage
                    }
                }
            }
       }
    }`);

    const {articlesPerPage} = result.data.site.siteMetadata;

    result.data.allMarkdownRemark.edges.forEach( edge => {
        const {template, slug} = edge.node.frontmatter;

        if (template === 'page') {
            createPage({
                path: slug,
                component: require.resolve('./src/templates/page-detail.js'),
                context: {
                    slug
                }
            });
        } else if (edge.node.frontmatter.template === 'post') {
            createPage({
                path: slug,
                component: require.resolve('./src/templates/article-detail.js'),
                context: {
                    slug
                }
            });
        }
    })

    const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / articlesPerPage);
    for (let i = 0; i < numPages; i += 1) {
        createPage({
            path: i === 0 ? '/blog' : `/blog/page/${i}`,
            component: require.resolve('./src/templates/article-archive.js'),
            context: {
                currentPage: i,
                postsLimit: articlesPerPage,
                postsOffset: i * articlesPerPage,
                prevPagePath: i <= 1 ? '/' : `/blog/page/${i - 1}`,
                nextPagePath: `/blog/page/${i + 1}`,
                currentPagePath: i <= 1 ? '/' : `/blog/page/${i - 1}`,
                hasPrevPage: i !== 0,
                hasNextPage: i !== numPages - 1
            }
        });
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    type MarkdownRemarkFrontmatter {
        date: String
        description: String
        tags: [String]
        title: String!
        slug: String!
        coverImage: String
        coverImageCaption: String
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `
    createTypes(typeDefs)
}

exports.onPreBootstrap = ({ store, reporter }) => {
    const { program } = store.getState()
    const contentPath = path.join(program.directory, "content");
    const staticsPath = path.join(program.directory, "static");
    const dirs = [
        contentPath,
        staticsPath,
        path.join(program.directory, "static/media"),
    ]
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            reporter.log(`creating the ${dir} directory`)
            fs.mkdirSync(dir)
        }
    });

    copyStaticAssets(staticsPath, reporter);

    const contentFiles = recursiveReaddirSync(contentPath).filter( (file) => path.extname(file) === ".md")
    if( contentFiles.length < 1) {
        reporter.log(`creating the default content in the ${contentPath} directory`);
        createDefaultContent(contentPath);
    }
};

function recursiveReaddirSync(_path) {
    let list = []
        , files = fs.readdirSync(_path)
        , stats
    ;

    files.forEach(function (file) {
        stats = fs.lstatSync(path.join(_path, file));
        if(stats.isDirectory()) {
            list = list.concat(recursiveReaddirSync(path.join(_path, file)));
        } else {
            list.push(path.join(_path, file));
        }
    });

    return list;
}

function copyStaticAssets(staticsPath, reporter){
    const assets = [
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "apple-touch-icon.png",
        "favicon.ico",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "site.webmanifest",
        "og-default.png",
    ];
    assets.forEach(asset => {
        const absAsset = path.join(staticsPath, asset);
        if(!fs.existsSync(absAsset)) {
            reporter.log(`creating the ${absAsset} archive`)
            fs.copyFileSync(path.join(__dirname,"static", asset), absAsset);
        }
    })
}


function createDefaultContent(contentDirectory) {

    const helloWorldArticle = `---
date: 2020-11-20 00:30:03+00:00
slug: /2020/hello-world/
title: Hello World
template: post
tags:
  - Writing
draft: false
description: "This is your first article, you can find it in the /content directory"
coverImage: ""
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu lorem eget metus venenatis dignissim. Vivamus lobortis, mauris eu facilisis sodales, nisl metus ultrices orci, non finibus quam nulla ac est. Fusce egestas faucibus lorem quis varius. Morbi id faucibus tellus, sit amet venenatis metus. Vivamus diam odio, mollis ac varius ut, imperdiet ut nunc. Sed sagittis nulla et tempus egestas. Donec sit amet molestie turpis. Maecenas purus ante, rutrum id erat eu, rutrum ultrices ligula.

Curabitur bibendum tincidunt tellus sit amet viverra. Etiam ac tellus suscipit, fringilla dui quis, fringilla nisi. Proin mattis ultrices orci id mollis. Cras laoreet nisl est, at rutrum augue mollis nec. In scelerisque orci enim, quis mattis risus tristique sed. Vivamus venenatis auctor nunc, ut auctor mi ornare vitae. Curabitur viverra aliquam tempor. Donec a urna nec nunc sagittis consequat. Phasellus non risus non erat vestibulum pharetra eget in massa. Vestibulum venenatis dui nec elit molestie, a consequat nunc blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam libero dolor, vestibulum consectetur nunc id, porta rhoncus tortor. Mauris tincidunt ornare dui in iaculis.


## h2 Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu lorem eget metus venenatis dignissim. Vivamus lobortis, mauris eu facilisis sodales, nisl metus ultrices orci, non finibus quam nulla ac est. Fusce egestas faucibus lorem quis varius. Morbi id faucibus tellus, sit amet venenatis metus. Vivamus diam odio, mollis ac varius ut, imperdiet ut nunc. Sed sagittis nulla et tempus egestas. Donec sit amet molestie turpis. Maecenas purus ante, rutrum id erat eu, rutrum ultrices ligula.

Curabitur bibendum tincidunt tellus sit amet viverra. Etiam ac tellus suscipit, fringilla dui quis, fringilla nisi. Proin mattis ultrices orci id mollis. Cras laoreet nisl est, at rutrum augue mollis nec. In scelerisque orci enim, quis mattis risus tristique sed. Vivamus venenatis auctor nunc, ut auctor mi ornare vitae. Curabitur viverra aliquam tempor. Donec a urna nec nunc sagittis consequat. Phasellus non risus non erat vestibulum pharetra eget in massa. Vestibulum venenatis dui nec elit molestie, a consequat nunc blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam libero dolor, vestibulum consectetur nunc id, porta rhoncus tortor. Mauris tincidunt ornare dui in iaculis.


### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes

> You can add Blockquotes


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")




## Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
`;

    const pageAbout = `---
slug: /about-me/
title: About
template: page
coverImage: ""
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu lorem eget metus venenatis dignissim. Vivamus lobortis, mauris eu facilisis sodales, nisl metus ultrices orci, non finibus quam nulla ac est. Fusce egestas faucibus lorem quis varius. Morbi id faucibus tellus, sit amet venenatis metus. Vivamus diam odio, mollis ac varius ut, imperdiet ut nunc. Sed sagittis nulla et tempus egestas. Donec sit amet molestie turpis. Maecenas purus ante, rutrum id erat eu, rutrum ultrices ligula.

Curabitur bibendum tincidunt tellus sit amet viverra. Etiam ac tellus suscipit, fringilla dui quis, fringilla nisi. Proin mattis ultrices orci id mollis. Cras laoreet nisl est, at rutrum augue mollis nec. In scelerisque orci enim, quis mattis risus tristique sed. Vivamus venenatis auctor nunc, ut auctor mi ornare vitae. Curabitur viverra aliquam tempor. Donec a urna nec nunc sagittis consequat. Phasellus non risus non erat vestibulum pharetra eget in massa. Vestibulum venenatis dui nec elit molestie, a consequat nunc blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam libero dolor, vestibulum consectetur nunc id, porta rhoncus tortor. Mauris tincidunt ornare dui in iaculis.

`;

    fs.writeFileSync(path.join(contentDirectory, "2020-11-20-hello-world.md"), helloWorldArticle);
    fs.writeFileSync(path.join(contentDirectory, "page-about.md"), pageAbout);

}
