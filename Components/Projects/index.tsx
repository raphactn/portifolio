import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Container,
  Text,
  Box,
  Flex,
  Heading,
  Link,
  Tag,
  TagLabel,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import GitData from "../../types/GitData";
import { useEffect, useRef } from "react";

export const Projects = ({ data }: GitData) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: "20px",
        scale: 1.1,
        margin: 5,
        transition: { type: "spring", duration: 1, bounce: 0 },
      });
    } else {
      animation.start({
        y: "100vw",
      });
    }
  }, [isInView]);

  const languageColor = (value: string) => {
    if (value === "JavaScript") {
      return "yellow";
    }
    if (value === "HTML") {
      return "orange";
    }
    return "blue";
  };

  return (
    <Box
      ref={ref}
      pb={20}
      pt={10}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Container maxW="container.xl">
        <Heading
          fontSize="2xl"
          textAlign={{ base: "center", md: "left" }}
          mt={5}
          mb={5}
        >
          Projetos
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
          {data.map((repo: any, i: number) => (
            <motion.div animate={animation} key={i}>
              <Box
                rounded={"lg"}
                minH="240px"
                bg={colorMode === "light" ? "white" : "gray.800"}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                p="3"
              >
                <Flex direction="column" gap={3}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    {repo.name}
                  </Text>
                  <Text>{repo.description}</Text>
                  {repo.language && (
                    <Tag
                      size={"md"}
                      variant="outline"
                      w="-webkit-max-content"
                      colorScheme={languageColor(repo.language)}
                    >
                      <TagLabel>{repo.language}</TagLabel>
                    </Tag>
                  )}
                  <Link
                    href={
                      repo.homepage ? `https://${repo.homepage}` : repo.html_url
                    }
                    target="_blank"
                  >
                    <Flex gap={2} alignItems="center" color="blue.500">
                      <Text>Acessar</Text>
                      <ArrowForwardIcon />
                    </Flex>
                  </Link>
                </Flex>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
