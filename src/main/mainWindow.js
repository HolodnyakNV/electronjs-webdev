const electron = require('electron')
import BrowserWinHandler from './BrowserWinHandler'
import { ipcMain } from 'electron'

let secondWinHandler;
let opened = false;
let maximized = false;
let youtube = false;
let local = false;

let winHandler = new BrowserWinHandler({
  height: 1000,
  width: 600,
  frame: false
})

winHandler.onCreated(_browserWindow => {

  winHandler.loadPage('/');
  _browserWindow.maximize();

  ipcMain.on('min1', e => {
    _browserWindow.minimize();
  });
  let maximized = false;
  ipcMain.on('max1', e => {
    maximized ? _browserWindow.maximize() : _browserWindow.unmaximize();
    maximized = !maximized;
  });
  ipcMain.on('cls1', e => {
    _browserWindow.close();
  });
})

ipcMain.on('new-window', e => {
  
  opened = true;
  let displays = electron.screen.getAllDisplays();

  let externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  });

  if (externalDisplay) {
    secondWinHandler = new BrowserWinHandler({
      x: externalDisplay.bounds.x,
      y: externalDisplay.bounds.y,
      frame: false
    })
  };

  secondWinHandler.onCreated(_browserWindow => {

    secondWinHandler.loadPage('/second');
    _browserWindow.maximize();
    // _browserWindow.openDevTools();


    ipcMain.on('min2', e => {
      _browserWindow.minimize();
    });

    ipcMain.on('max2', e => {
      maximized ? _browserWindow.maximize() : _browserWindow.unmaximize();
      maximized = !maximized;
    });

    ipcMain.on('hid', e => {
      opened = false;
      _browserWindow.webContents.executeJavaScript('hide()')
      _browserWindow.hide();
    });
    ipcMain.on('show', e => {
      opened = true;
      maximized = false;
      _browserWindow.show();
      _browserWindow.maximize();
      _browserWindow.webContents.executeJavaScript(`setVideo(${youtube},${local})`)
    });

    ipcMain.on('youtube', e => {
      if (!youtube) {
        youtube = true;
        local = false;
      } else {
        youtube = false;
        local = false;
      }
      _browserWindow.webContents.executeJavaScript(`youtube(${youtube})`)
    });
    
    ipcMain.on('local', e => {
      if (!local) {
        local = true;
        youtube = false;
      } else {
        local = false;
        youtube = false;
      }
      _browserWindow.webContents.executeJavaScript(`local(${local})`)
    });

    ipcMain.on('manual', e => {
      _browserWindow.webContents.executeJavaScript('manual()')
    });

    ipcMain.on('back', e => {
      _browserWindow.webContents.executeJavaScript('back()')
    });

  });

  ipcMain.handle('get-opened', async (event) => {
    return opened;
  });

});

export {winHandler, secondWinHandler}
