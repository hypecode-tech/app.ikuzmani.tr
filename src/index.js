import { app, BrowserWindow, Menu } from "electron";
import pkg from "electron-updater";
const { autoUpdater } = pkg;
import path from "path";

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    show:true,
    darkTheme: true,
    fullscreenable:true,
    minWidth:1240,
    minHeight:720,
    minimizable:true,
    icon: path.join(import.meta.dirname, "logo.png"),
    autoHideMenuBar: true, // Menüleri gizle
    title:"IKUZMANI - İnsan Kaynakları Yazılımı",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Menüleri tamamen kaldır
  Menu.setApplicationMenu(null);

  // Web sayfasını yükle
  mainWindow.loadURL("https://app.ikuzmani.tr");

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
