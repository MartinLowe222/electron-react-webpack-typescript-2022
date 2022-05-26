import React from "react"

import { Box, Button, Container, Heading, Text, useToast } from "@chakra-ui/react"

import Layout from "../Layout"
import { Wrapper } from "./style"

const PageOne = () => {
  const toast = useToast();
  return (
    <Wrapper>
      <Layout>
        <Box minHeight='100vh'>
          <Heading as='h5' size='lg' p={5} m={-1}>
            Welcome Page one
          </Heading>
          <Box p={2} m={2}>
            <Text>I'm page one text</Text>
          </Box>
          <Button
            p={2}
            m={2}
            onClick={() =>
              toast({
                title: 'Inurance Carriers have beened Turned Off.',
                description: 'All insurance carriers have been turned off.',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Insurance Carriers Turn Off
          </Button>
        </Box>
      </Layout>
    </Wrapper>
  );
};

export default PageOne;
