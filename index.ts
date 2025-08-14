import { app, BrowserWindow } from "electron";
import { autoUpdater } from "electron-updater";
import path from "path";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, "assets", "logo.png"),
    webPreferences: {
      nodeIntegration: false,   // webview için false
      contextIsolation: true,
    },
  });

  // Buraya göstermek istediğin web sitesi URL'si
  mainWindow.loadURL("https://www.google.com");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  // Auto-updater kontrolü
  autoUpdater.checkForUpdatesAndNotify();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

// Auto-updater eventleri
autoUpdater.on("update-available", () => {
  console.log("Güncelleme mevcut...");
});

autoUpdater.on("update-downloaded", () => {
  console.log("Güncelleme indirildi, uygulama yeniden başlatılıyor...");
  autoUpdater.quitAndInstall();
});
