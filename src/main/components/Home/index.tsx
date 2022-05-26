import React, { useState } from "react"

import { Box, Heading, Text, VStack } from "@chakra-ui/react"

import Layout from "../Layout"
import { Wrapper } from "./style"

const Home = () => {
  return (
    <Wrapper>
      <Layout>
        <Box minHeight='100vh'>
          <Heading as='h3' size='lg' p={5} m={-1}>
            Welcome to AARDY Admin home
          </Heading>
          <Box p={2} m={2}>
            <Text>Welcome to aardy admin home window</Text>
          </Box>
        </Box>
      </Layout>
    </Wrapper>
  );
};

export default Home;
