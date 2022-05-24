import React from "react"

import { Wrapper } from "./style"

const PageOne = () => {
  return (
    <Wrapper>
      <div className='page'>
        <div className='header'>I'm page one header</div>
        <div className='content'>I'm page one content</div>
      </div>
    </Wrapper>
  );
};

export default PageOne;
