const { app, BrowserWindow, ipcMain } = require('electron');
const db = require('./db');
console.log(db);

let win;

function createWindow() {
  win = new BrowserWindow({
    // fullscreen: true,
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // win.loadFile('src/index.html');
  win.loadURL('http://localhost:3000/');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('connection', (event, arg) => {
  console.log(arg);
  event.reply('connect-success', db);
});
