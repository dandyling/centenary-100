import { Flex, Grid, Text, Image, AspectRatio } from "@chakra-ui/react";
import * as React from "react";
import { graphql } from "gatsby";
import { RatioContainer } from "../components/RatioContainer";

const IndexPage = ({ data }) => {
  return (
    <Flex direction="column">
      <Image
        src={data.site.siteMetadata.heroImage}
        alt="Resources for the Centenary of Abdu'l Baha"
      />
      <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="auto">
        {data.allMdx.edges.map((edge) => {
          const { node } = edge;
          return (
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <RatioContainer ratio="4 / 3" maxWidth="100%">
                <Image
                  objectFit="cover"
                  key={node.id}
                  src={node.frontmatter.image}
                  alt={node.frontmatter.title}
                />
              </RatioContainer>
              <Text>{node.frontmatter.title}</Text>
            </Flex>
          );
        })}
      </Grid>
    </Flex>
  );
};

export const query = graphql`
  query pages {
    site {
      id
      siteMetadata {
        heroImage
      }
    }
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
