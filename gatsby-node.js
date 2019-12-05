const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      images: allContentfulSlika {
        edges {
          node {
            slug
            id: contentful_id
          }
        }
      }
    }
  `);

  data.images.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve("./src/templates/single-image-template.js"),
      context: { id: node.id },
    });
  });
};
