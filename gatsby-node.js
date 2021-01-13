const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            events: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/events/" } }
              sort: { fields: [frontmatter___order], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                  }
                  excerpt
                }
              }
            }
            stories: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/stories/" } }
              sort: { fields: [frontmatter___title], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    image
                    linkedin
                    jobtitle
                    path
                  }
                  excerpt
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/team/" } }
              sort: { fields: [frontmatter___order], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    order
                  }
                  excerpt
                }
              }
            }
          }
        `,
      ).then((result) => {
        result.data.events.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/service.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.stories.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/stories.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/team.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      }),
    );
  });
};
