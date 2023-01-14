const { app, BrowserWindow } = require('electron'); 
function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: "#123"
    });
    win.loadFile("./src/index.html");
    win.webContents.openDevTools(); 
}

app.whenReady().then(() => {
    createWindow();
})