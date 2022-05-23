import { app, BrowserWindow } from "electron"
import path from "path"

import { registerTitlebarIpc } from "@misc/window/titlebarIPC"

// Electron Forge automatically creates these entry points
declare const APP_WINDOW_WEBPACK_ENTRY: string;
declare const APP_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let tickerWindow: BrowserWindow;

/**
 * Create Application Window
 * @returns {BrowserWindow} Application Window Instance
 */
export function createTickerWindow(): BrowserWindow {
  // Create new window instance
  tickerWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'blue',
    show: false,
    autoHideMenuBar: true,
    frame: false,
    titleBarStyle: 'hidden',
    icon: path.resolve('assets/images/logo.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      preload: APP_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // Load the index.html of the app window.
  tickerWindow.loadURL(APP_WINDOW_WEBPACK_ENTRY);

  // Show window when its ready to
  tickerWindow.on('ready-to-show', () => tickerWindow.show());

  // Register Inter Process Communication for main process
  registerMainIPC();

  // Close all windows when main window is closed
  tickerWindow.on('close', () => {
    tickerWindow = null;
    app.quit();
  });

  return tickerWindow;
}

/**
 * Register Inter Process Communication
 */
function registerMainIPC() {
  /**
   * Here you can assign IPC related codes for the application window
   * to Communicate asynchronously from the main process to renderer processes.
   */
  registerTitlebarIpc(tickerWindow);
}
