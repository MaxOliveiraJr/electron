const { app, BrowserWindow } = require('electron');

const isDev = process.env.NODE_DEV !== undefined && process.env.NODE_DEV === "development" ? true : false;

const isMac = process.platform === 'darwin' ? true : false;

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: "#123",
        show: false
    });
    win.loadFile("./src/index.html");
    if (isDev) {
        win.webContents.openDevTools();
    }
    win.once('ready-to-show', () => {
        win.show();
    })
}

app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', () => {
    console.log('Todas as Janelas fechadas');
    if (!isMac) {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})