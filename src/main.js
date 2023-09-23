import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath, format } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
    try {
        const win = new BrowserWindow({
            width: 800,
            height: 600
        });

        win.loadURL(
            format({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    } catch (err) {
        throw err;
    }
};

app.whenReady().then(() => {
    createWindow();
});
