import React, { useState } from "react"

import {
    Box, Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack
} from "@chakra-ui/react"

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
          <Box p={2} m={2}>
            <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <TableCaption color='black'>Aardy Sites Running</TableCaption>
                <Thead>
                  <Tr>
                    <Th color='black'>Site</Th>
                    <Th color='black'>Sales</Th>
                    <Th isNumeric color='black'>
                      Status%
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Aardy</Td>
                    <Td>$5000</Td>
                    <Td isNumeric>100</Td>
                  </Tr>
                  <Tr>
                    <Td>TripInsure</Td>
                    <Td>$3000</Td>
                    <Td isNumeric>100</Td>
                  </Tr>
                  <Tr>
                    <Td>CruiseInsurance</Td>
                    <Td>$6000</Td>
                    <Td isNumeric>100</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Layout>
    </Wrapper>
  );
};

export default Home;
