import { Container, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import * as React from "react";
import { RatioContainer } from "../components/RatioContainer";

const IndexPage = ({ data }) => {
  return (
    <Flex as="main" direction="column">
      <Flex
        as="section"
        bgImage={`url(${data.site.siteMetadata.heroImage})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={["2xl", null, "3xl"]}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          backgroundColor="blackAlpha.800"
          maxWidth={["85%", null, "80ch"]}
          padding={[4, null, 16]}
        >
          <Heading
            as="h1"
            color="white"
            textTransform="uppercase"
            fontSize={["4xl"]}
            fontWeight="normal"
            my="4"
          >
            Centenary of the Ascension of Abdu'l Baha Resources
          </Heading>
        </Container>
      </Flex>
      <Flex as="section" padding="4" flexDirection="column">
        <Heading
          color="delta"
          mt="2"
          fontSize="2xl"
          fontWeight="semibold"
          as="h2"
        >
          Resources
        </Heading>
        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          gridAutoRows="auto"
          gridColumnGap="8"
          gridRowGap="4"
          my="4"
        >
          {data.allMdx.edges.map((edge) => {
            const { node } = edge;
            return (
              <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                key={node.id}
              >
                <RatioContainer minWidth="100%" ratio="16/9">
                  <Image
                    borderRadius="md"
                    shadow="md"
                    src={`${node.frontmatter.image}`}
                    alt={node.frontmatter.title}
                  />
                </RatioContainer>
                <Text
                  my="2"
                  fontSize="sm"
                  textShadow="md"
                  color="blackAlpha.700"
                  textAlign="center"
                >
                  {node.frontmatter.title}
                </Text>
              </Flex>
            );
          })}
        </Grid>
      </Flex>
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
