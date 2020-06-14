// slug == unique identifying part of path

const path = require(`path`);
// use source filesystem to create slugs/paths for MD files
const { createFilePath } = require(`gatsby-source-filesystem`)

// will be called whenever a new node is created
exports.onCreateNode = ({ node, getNode, actions }) => {
    // used to add a slug field to markdown frontmatter
    const { createNodeField } = actions;

    // only deal with markdown files
    if(node.internal.type === `MarkdownRemark`){
        //console.log(node.internal.type);
        // getNode() is a helper to get node information
        const fileNode = getNode(node.parent);
        console.log(`\n`, fileNode.relativePath);

        // find parent file not and create the slug
        const slug = createFilePath({ node, getNode, basePath: `pages`});
        console.log(slug)
        // add field to markdown metadata with value inserted here
        createNodeField({
            node, 
            name: `slug`,
            value: slug,
        });
        // add another metadata field
        createNodeField({
            node, 
            name: `slugs`,
            value: `base`,
        });
    }
}

// create a promise that queries for slug field
// impl of Gatsby API createPages for plugins to add pages
exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;
    const mdSlugQuery = await graphql(`
        query {
            allMarkdownRemark {
                edges{
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log(JSON.stringify(mdSlugQuery, null, 2));
    mdSlugQuery.data.allMarkdownRemark.edges.forEach(( {node} )=> {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                // data passed is available as graphQL variables
                slug: node.fields.slug,
            },
        })
    })
}
