import React from "react"

import { Box } from "@chakra-ui/react"

import NavBar from "../NavBar"

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <NavBar />
        <Box as='main'>{children}</Box>
      </Box>
    </>
  );
};

export default Layout;
