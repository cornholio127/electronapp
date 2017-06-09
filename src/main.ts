import { BrowserWindow, dialog, Menu } from 'electron';

const APP = 'file://' + __dirname + '/app/index.html';
const GUIDE = 'file://' + __dirname + '/guide/index.html';

export default class Main {
  static mainWindow?: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow: typeof BrowserWindow;

  private static onWindowAllClosed() {
    if (process.platform !== 'darwin') {
      Main.application.quit();
    }
  }

  private static onClose() {
    // Dereference the window object.
    Main.mainWindow = undefined;
  }

  private static onReady() {
    Main.mainWindow =
      new Main.BrowserWindow({ width: 800, height: 600 });
    //Main.mainWindow.webContents.openDevTools();
    Main.mainWindow.loadURL(APP);
    Main.mainWindow.on('closed', Main.onClose);
    // Create menu
    const template: any = [
      {
        label: 'File',
        submenu: [
          {
            label: 'Start',
            click() {
              if (Main.mainWindow) {
                Main.mainWindow.loadURL(APP);
              }
            }
          },
          { type: 'separator' },
          { role: 'quit' }
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Guide',
            click() {
              if (Main.mainWindow) {
                Main.mainWindow.loadURL(GUIDE);
              }
            }
          },
          { type: 'separator' },
          {
            label: 'About',
            click() {
              if (Main.mainWindow) {
                showAboutDialog(Main.mainWindow);
              }
            }
          },
        ]
      }
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }

  static main(
    app: Electron.App,
    browserWindow: typeof BrowserWindow) {
    // we pass the Electron.App object and the 
    // Electron.BrowserWindow into this function
    // so this class1 has no dependencies.  This
    // makes the code easier to write tests for

    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.application.on('window-all-closed',
      Main.onWindowAllClosed);
    Main.application.on('ready',
      Main.onReady);
  }
}

function showAboutDialog(window: Electron.BrowserWindow): void {
  dialog.showMessageBox(window, {
    title: 'About this application',
    message: 'Version: 1.0.0'
  });
}
