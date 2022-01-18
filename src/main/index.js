const electron = require('electron')
import BrowserWinHandler from './BrowserWinHandler'
import { app, ipcMain } from 'electron'
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

// Load here all startup windows
let main = require('./mainWindow');
// let second = require('./secondWindow');

// console.log(second);
