import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
  useColorModeValue,
  VStack,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import Lottie from "react-lottie";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import animationData from "../Animation/animation.json";
import sendEmailData from "../Animation/send.json";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [animationControl, setAnimationControl] = useState({
    isStopped: true,
    isPaused: false,
  });
  const [animationSendControl, setAnimationSendControl] = useState({
    isStopped: false,
    isPaused: true,
  });
  const ref = useRef(null);
  const form = useRef<any>();
  const isInView = useInView(ref);
  const animation = useAnimation();
  const toast = useToast();
  const [resultSend, setResultSend] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimationControl({
        ...animationControl,
        isStopped: false,
      });
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0 },
      });
    } else {
      animation.start({
        x: "100vw",
      });
    }
  }, [isInView]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const sendEmailOptions = {
    loop: false,
    autoplay: true,
    animationData: sendEmailData,
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_icm1v5i", form.current, "tdj_QqejKEVzwEMzu")
      .then(
        (result) => {
          setResultSend(true);
          setAnimationSendControl({
            ...animationSendControl,
            isPaused: false,
          });
        },
        (error) => {
          setResultSend(false);
          toast({
            title: error.text,
            position: "top-right",
            status: "error",
            isClosable: true,
          });
        }
      );
  };

  return (
    <Container maxW="container.xl" ref={ref}>
      <Box borderRadius="lg" p={{ base: 5, lg: 16 }} id="contact">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Lottie
              options={defaultOptions}
              isStopped={animationControl.isStopped}
              isPaused={animationControl.isPaused}
            />
          </Box>
          <motion.div animate={animation}>
            <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
              <Box
                bg={useColorModeValue("gray.100", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <Heading fontSize={"4xl"} textAlign="center" mb={5}>
                  Contato
                </Heading>
                <form ref={form} onSubmit={sendEmail}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    {!resultSend ? (
                      <Button
                        isLoading={resultSend}
                        bg="teal"
                        color="white"
                        type="submit"
                        _hover={{
                          bg: "teal.500",
                        }}
                        w="full"
                      >
                        Enviar Messagem
                      </Button>
                    ) : (
                      <Box>
                        <Lottie
                          options={sendEmailOptions}
                          width={120}
                          isStopped={animationControl.isStopped}
                          isPaused={animationControl.isPaused}
                        />
                      </Box>
                    )}
                  </VStack>
                </form>
              </Box>
            </VStack>
          </motion.div>
        </SimpleGrid>
      </Box>
    </Container>
  );
};
