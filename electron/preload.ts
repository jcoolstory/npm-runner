import { contextBridge, ipcRenderer } from "electron"
import * as fs from "fs"

contextBridge.exposeInMainWorld('electron', {
  showDialog: ()=> {
    ipcRenderer.send("showDialog", "sd")
  },
  addEventListener: (event: string, callback: any)=> {
    ipcRenderer.on(event, callback)
    fs.read
  },
  removeEventListener: (event: string, callback: any) => {
      ipcRenderer.removeListener(event, callback);
  },
  ipcRenderer: ipcRenderer,
  fs:fs
})

export {}