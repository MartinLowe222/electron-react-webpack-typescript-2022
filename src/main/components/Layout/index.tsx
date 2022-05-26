import React from "react"

import { Box } from "@chakra-ui/react"

import NavBar from "../NavBar"

const Layout = ({ children }) => {
  return (
    <>
      <Box border='8px solid cornsilk'>
        <NavBar />
        <Box as='main' bg='darkcyan'>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
