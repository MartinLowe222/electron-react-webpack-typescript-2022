import React, { useEffect, useState } from "react"
import { HashRouter, Link, Route, Routes } from "react-router-dom"

import { Box, Img } from "@chakra-ui/react"

import Home from "../main/components/Home"
import NavBar from "../main/components/NavBar"
import PageOne from "../main/components/PageOne"
import PageTwo from "../main/components/PageTwo"

const Application: React.FC = (props) => {
  const [counter, setCounter] = useState(0);
  const [darkTheme, setDarkTheme] = useState(true);
  const [versions, setVersions] = useState<Record<string, string>>({});

  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }

    // Apply verisons
    const app = document.getElementById('app');
    const versions = JSON.parse(app.getAttribute('data-versions'));
    setVersions(versions);
  }, []);

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/one' element={<PageOne />} />
          <Route path='/two' element={<PageTwo />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Application;
