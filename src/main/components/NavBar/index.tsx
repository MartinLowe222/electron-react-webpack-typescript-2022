import React from "react"
import { Link } from "react-router-dom"

import { Box, HStack, Menu, MenuItem } from "@chakra-ui/react"

import Logo from "../../../../assets/images/logo.png"
import { Wrapper } from "./style"

const NavBar = () => {
  return (
    <Wrapper>
      <HStack spacing='180px' bg='lightseagreen'>
        <Box borderWidth='1px' borderRadius='lg' p={2} m={4}>
          <Link to='/'>
            <h2>Home</h2>
          </Link>
        </Box>
        <Box borderWidth='1px' borderRadius='lg' p={2} m={2}>
          <Link to='/one'>
            <h2>Page One</h2>
          </Link>
        </Box>
        <Box borderWidth='1px' borderRadius='lg' p={2} m={2}>
          <Link to='/two'>
            <h2>Page Two</h2>
          </Link>
        </Box>
      </HStack>
    </Wrapper>
  );
};

export default NavBar;
