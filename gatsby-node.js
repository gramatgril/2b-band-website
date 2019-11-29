const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      images: allContentfulAsset {
        edges {
          node {
            title
            contentful_id
          }
        }
      }
    }
  `);

  data.images.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.title}`,
      component: path.resolve("./src/templates/single-image-template.js"),
      context: { id: node.contentful_id },
    });
  });
};
