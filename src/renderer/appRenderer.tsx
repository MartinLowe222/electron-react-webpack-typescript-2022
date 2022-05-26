import React from "react"
import { createRoot } from "react-dom/client"

import { ChakraProvider } from "@chakra-ui/react"
import WindowFrame from "@misc/window/components/WindowFrame"

import Application from "../main/Application"

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <ChakraProvider>
    <WindowFrame title='ERWT Boilerplate' platform='windows'>
      <Application />
    </WindowFrame>
  </ChakraProvider>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
