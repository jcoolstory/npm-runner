// var {electron,ipcMain} = require('electron');
// var { dialog } = require("electron");
import { app, ipcMain, BrowserWindow } from "electron";
import { showOpenFileDialog } from "./showOpenFileDialog"
let win;
function createWindow(){
    win = new BrowserWindow();
    win.loadURL('file://'+__dirname+'/../renderer/index.html');
    win.on("close", function() {
        win = null;
    });
}

app.on("ready", ()=> {
    console.log("ready");
    createWindow();
});

app.on("window-all-closed",()=> {
    if (process.platform !== "darwin") {
        app.quit();
    }
})

app.on("activate", (_e, hasVisibledWindows) => {
    console.log("activate");
    if (!hasVisibledWindows) {
        createWindow();
    }
})

ipcMain.on("showDialog", (event)=>{
    
    showOpenFileDialog()
    .then((selectPath)=>{
        event.sender.send("selectPath", selectPath);
        
    })
    .catch((ex)=> {
       console.error("error",ex) ;
    });
    
});
