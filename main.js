import electron from 'electron'

const app = electron.app
const BrowserWindow = electron.BrowserWindow

require('dotenv').config()
const path = require('path')
const url = require('url')

let mainWindow

async function createWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  process.env.ENVIRONMENT === 'dev' && mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())
app.on('activate', () => mainWindow === null && createWindow())
