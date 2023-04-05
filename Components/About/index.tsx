import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import {
  Container,
  Text,
  Box,
  Center,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
  Button,
  Progress,
  useDisclosure,
  Divider,
  Heading,
} from "@chakra-ui/react";
import {
  SiJavascript,
  SiTypescript,
  SiPrisma,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiSequelize,
  SiChakraui,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { ReactElement } from "react";

interface OptionsType {
  name: string;
  icon: ReactElement;
  progress?: number;
}

export const About = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  const skills: Array<OptionsType> = [
    { name: "Javascript", icon: <SiJavascript />, progress: 80 },
    { name: "Typescript", icon: <SiTypescript />, progress: 60 },
    { name: "HTML", icon: <SiHtml5 />, progress: 90 },
    { name: "CSS", icon: <SiCss3 />, progress: 95 },
    { name: "Prisma", icon: <SiPrisma />, progress: 60 },
    { name: "React", icon: <SiReact />, progress: 80 },
    { name: "Material UI", icon: <SiMaterialui />, progress: 70 },
    { name: "Sequelize", icon: <SiSequelize />, progress: 60 },
    { name: "Next.js", icon: <TbBrandNextjs />, progress: 90 },
    { name: "Chakra UI", icon: <SiChakraui />, progress: 90 },
    { name: "Express", icon: <SiExpress />, progress: 60 },
  ];

  return (
    <Container pt={10} maxW="container.xl" pb={20}>
      <Heading fontSize="2xl" textAlign={{ base: "center", md: "left" }} mt={5}>
        Sobre mim
      </Heading>
      <Center
        mt={10}
        gap={5}
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Center>
          <Box
            bg={useColorModeValue("gray.100", "gray.900")}
            overflowX="auto"
            p={8}
            rounded={"lg"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          >
            {!isOpen ? (
              <Box>
                <Heading fontSize="large" mb={3}>
                  Olá meu nome é Raphael Caetano
                </Heading>
                <Text>
                  Desenvolvedor web full stack com expertise em tecnologias como
                  Node.js, React.js, TypeScript e Next.js. Habilidoso em
                  linguagens como HTML5, CSS e JavaScript, além de possuir
                  conhecimentos em prisma, chakra ui, Socket.io, PostgreSQL,
                  Express.js, Material-UI e Sequelize.js. Com experiência em
                  desenvolvimento web e programação lógica, tenho habilidades em
                  Git para controle de versão e colaboração em projetos em
                  equipe. Meu objetivo é contribuir para projetos de sucesso,
                  agregando valor com soluções eficazes e criativas. Sempre fui
                  apaixonado por desafios e aprendizados constantes. Durante
                  minha jornada como Desenvolvedor tenho tido experiências
                  incríveis e desenvolvido habilidades valiosas que me permitem
                  buscar novas oportunidades e crescer ainda mais. Meu objetivo
                  é encontrar um ambiente dinâmico e colaborativo onde possa
                  aplicar minhas habilidades e conhecimentos para contribuir de
                  forma significativa para o sucesso da empresa. Estou sempre
                  aberto a novas oportunidades e desafios que possam me fazer
                  crescer pessoal e profissionalmente.
                </Text>
              </Box>
            ) : (
              <Box>
                <Heading fontSize="large">Minhas Skills</Heading>
                <Divider mb={5} mt={5} />
                <SimpleGrid
                  columns={{ base: 3, md: 5, lg: 7, xl: skills.length }}
                  spacing={5}
                  whiteSpace="nowrap"
                >
                  {skills.map((item, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: "-150%" }}
                      animate={isOpen ? { opacity: 1, x: "0px" } : {}}
                      transition={{ duration: 0.7 }}
                      key={i}
                    >
                      <Center
                        flexDirection="column"
                        rounded={"lg"}
                        bg={colorMode === "light" ? "white" : "gray.800"}
                        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                        p="3"
                      >
                        <Box fontSize="30px" color={colorMode}>
                          {item.icon}
                        </Box>
                        <Text>{item.name}</Text>
                        <Progress
                          w="100%"
                          mt={3}
                          colorScheme="teal"
                          size="sm"
                          value={item.progress}
                        />
                      </Center>
                    </motion.div>
                  ))}
                </SimpleGrid>
              </Box>
            )}
            <Center
              justifyContent="space-between"
              alignItems={"end"}
              gap={5}
              mt={5}
            >
              <Box>
                <Button colorScheme="teal" variant="outline" size="sm" mt={5}>
                  <a href="/linkedin_profile.pdf" download>
                    Download CV
                  </a>
                </Button>
              </Box>
              <Center onClick={onToggle}>
                <Text fontWeight={"bold"}>
                  {!isOpen ? "Minhas Skills" : "Sobre mim"}
                </Text>
                <ChevronRightIcon fontSize="30px" cursor="pointer" />
              </Center>
            </Center>
          </Box>
        </Center>
      </Center>
    </Container>
  );
};
