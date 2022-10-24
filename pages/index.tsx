import { Box, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import WithSubnavigation from "../Components/Sidebar";
import { Projects } from "../Components/Projects";
import { About } from "../Components/About";
import { Profile } from "../Components/Profile";
import GitData from "../types/GitData";
import { Contact } from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = ({ data }: GitData) => {
  return (
    <Box overflow={"hidden"}>
      <Head>
        <title>Raphael Caetano</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <WithSubnavigation />
      <Profile />
      <Divider />
      <About />
      <Projects data={data} />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/raphactn/repos");
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};
