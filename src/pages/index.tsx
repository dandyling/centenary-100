import { Flex } from "@chakra-ui/react";
import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const IndexPage = ({ data }) => {
  return (
    <Flex direction="column">
      Pages
      <Flex direction="column">
        {data.allMdx.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <p>{edge.node.frontmatter.title}</p>
              <MDXRenderer>{edge.node.body}</MDXRenderer>
              <img src={edge.node.frontmatter.image} />
            </li>
          );
        })}
      </Flex>
    </Flex>
  );
};

export const query = graphql`
  query pages {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            image
          }
          body
        }
      }
    }
  }
`;

export default IndexPage;
