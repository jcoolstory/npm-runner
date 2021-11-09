import { dialog } from "electron";

export function showOpenFileDialog(){
    return new Promise((resolve, reject) => {
        const files : any = dialog.showOpenDialog({
                title:"open",
                properties : ["openDirectory"],
            }
        );
        
        if (files && files.length > 0){
            resolve(files[0]);
        } else {
            reject();
        }
    });
}