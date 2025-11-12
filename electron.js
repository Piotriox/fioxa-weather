const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    icon: path.join(__dirname, 'public/icon.png'), // optional
    show: false // Pencereyi önce gizle
  });

  // URL'i yükle
  const startUrl = isDev 
    ? 'http://localhost:5173' 
    : `file://${path.join(__dirname, '../dist/index.html')}`;
  
  mainWindow.loadURL(startUrl);

  // Geliştirme modunda DevTools'u aç
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Pencere hazır olduğunda göster
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Menüyü kaldır (opsiyonel)
  mainWindow.setMenuBarVisibility(false);
}

// Uygulama hazır olduğunda
app.whenReady().then(createWindow);

// Tüm pencereler kapandığında (Mac dışında)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Mac'te dock'ta tıklandığında
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});