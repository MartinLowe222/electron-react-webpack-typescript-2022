import React from "react"
import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

import { Wrapper } from "./style"

const NavBar = () => {
  return (
    <Wrapper>
      <Navbar bg='dark' variant='dark'>
        <div className='navbar'>
          <ul className='nav-links'>
            <Link to='/'>
              <h2>Home</h2>
            </Link>
            <Link to='/one'>
              <h2>Page One</h2>
            </Link>
            <Link to='/two'>
              <h2>Page Two</h2>
            </Link>
          </ul>
          <div></div>
        </div>
      </Navbar>
    </Wrapper>
  );
};

export default NavBar;
