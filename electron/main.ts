import { app, ipcMain, BrowserWindow } from 'electron';
import * as path from 'path';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import { showOpenFileDialog } from "./showOpenFileDialog"
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // contextIsolation: false,
      nodeIntegration: false,
      // enableRemoteModule: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      // preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  if (app.isPackaged) {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);  
  } else {
    win.loadURL('http://localhost:3002/index.html');
    // win.webContents.openDevTools();

    // Hot Reloading on 'node_modules/.bin/electronPath'
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname,
        '..',
        '..',
        'node_modules',
        '.bin',
        'electron' + (process.platform === "win32" ? ".cmd" : "")),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });
  }
}

app.whenReady().then(() => {
  // DevTools
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

ipcMain.on("showDialog", (event)=>{
  showOpenFileDialog()
    .then((selectPath)=>{
        event.sender.send("selectPath", selectPath);  
    })
    .catch((ex)=> {
      console.error("error",ex) ;
    });
});