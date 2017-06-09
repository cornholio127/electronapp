import { BrowserWindow, dialog, Menu } from 'electron';

export default class Main {
    static mainWindow?: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow: typeof BrowserWindow;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose(){
        // Dereference the window object.
        Main.mainWindow = undefined;
    }

    private static onReady(){
        Main.mainWindow = 
            new Main.BrowserWindow({width: 800, height: 600});
        //Main.mainWindow.webContents.openDevTools();
        Main.mainWindow
            .loadURL('file://' + __dirname + '/app/index.html');
        Main.mainWindow.on('closed', Main.onClose);
        // Create menu
        const template = [
            {
            label: 'File',
            submenu: [
                { role: 'quit' }
            ]
            },
            {
            label: 'Help',
            submenu: [
                {
                    label: 'About',
                    click() {
                        if (Main.mainWindow) {
                            showAboutDialog(Main.mainWindow);
                        }
                    }
                }
            ]
            }
        ];
        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }

    static main(
        app: Electron.App,
        browserWindow: typeof BrowserWindow){
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
