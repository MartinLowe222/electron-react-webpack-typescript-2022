import "./Application.scss"

import React, { useEffect, useState } from "react"

import darkModeIcon from "@assets/images/darkmode.png"
import lightModeIcon from "@assets/images/lightmode.png"
import logo from "@assets/images/logo.png"
import { DirectionalHint, TeachingBubble } from "@fluentui/react/lib"

const Application: React.FC = () => {
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

    // buuble
    const id = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(id);
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
    <div id='erwt'>
      <div className='header'>
        <div className='main-heading'>
          <h1 className='themed'>Aardy Admin Tools</h1>
        </div>
        {/*
        {showBubble && (
            <TeachingBubble
              calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
              target='#targetButton'
              isWide={true}
              hasCloseButton={true}
              onDismiss={() => setShowBubble(false)}
              headline='Please read'
            >
              Hello
            </TeachingBubble>
          
        )}
        */}
      </div>

      {/*<div className='footer'>
        <div className='center'>
          <button
            id='targetButton'
            onClick={() => {
              if (counter > 99) return alert('Going too high!!');
              setCounter(counter + 1);
            }}
          >
            Increment <span>{counter}</span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button
            onClick={() => {
              'goToSettingsWindow()';
            }}
          >
            Go to Settings Window
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button onClick={toggleTheme}>
            {darkTheme ? 'Light Mode' : 'Dark Mode'}
            <span>
              <img
                className='rotate'
                src={darkTheme ? lightModeIcon : darkModeIcon}
              />
            </span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button
            onClick={() => {
              alert('carriers turned off');
            }}
          >
            Insurance Carriers off
          </button>
        </div>
      </div>
         */}
    </div>
  );
};

export default Application;
