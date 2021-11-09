import { dialog } from "electron";

export function showOpenFileDialog(){
    return new Promise((resolve, reject) => {
        const files  = dialog.showOpenDialog({
                title:"open",
                properties : ["openDirectory"],
            }
        );
        files.then( (data)=> {
            resolve(data.filePaths)
        })
    });
}