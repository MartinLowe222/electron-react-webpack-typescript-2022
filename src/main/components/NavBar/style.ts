import styled from "styled-components"

export const Wrapper = styled.section`
  .navbar {
    width: 100%;
    min-height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    background: #6ac14b;
  }

  .nav-links {
    width: 40%;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  .navbar .nav-links > a {
    color: #fff;
    text-decoration: none;
  }
`;
