import React from "react"
import { Link } from "react-router-dom"

import Logo from "../../../../assets/images/logo.png"
import { Wrapper } from "./style"

const NavBar = () => {
  return (
    <Wrapper>
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
        <div className='image'>
          <img src={Logo}></img>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
