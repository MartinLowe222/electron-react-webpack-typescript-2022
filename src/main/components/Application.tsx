import "./Application.scss"

import React, { useEffect, useState } from "react"
import { HashRouter, Link, Route, Routes } from "react-router-dom"

import darkModeIcon from "@assets/images/darkmode.png"
import lightModeIcon from "@assets/images/lightmode.png"
import logo from "@assets/images/logo.png"
import { DirectionalHint, TeachingBubble } from "@fluentui/react/lib"

const Stand = () => {
  return <h1>Stand</h1>;
};

const Sit = () => {
  return <h1>Sit</h1>;
};

const Home = () => {
  return <h1>HOME!</h1>;
};

const Application: React.FC = (props) => {
  const [showBubble, setShowBubble] = useState(false);
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
    <HashRouter>
      <div className='App'>
        <div className='menu'>
          <Link to='/'>
            <h2>Home</h2>
          </Link>
          <Link to='/one'>
            <h2>Stand</h2>
          </Link>
          <Link to='/two'>
            <h2>Sit</h2>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/one' element={<Stand />} />
          <Route path='/two' element={<Sit />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default Application;
