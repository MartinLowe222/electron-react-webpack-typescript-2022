import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"

import { Wrapper } from "./style"

const Home = () => {
  return (
    <Wrapper>
      <div className='page'>
        <div className='header'>
          <h4>Welcome to AARDY Admin home </h4>
        </div>
        <div className='content'>I'm home content</div>
      </div>
    </Wrapper>
  );
};

export default Home;
