import { app, ipcMain, shell } from 'electron';
import { Service } from '../types';
import { setIpcReplier } from '../utils';

export class IpcService extends Service {
    run() {
        ipcMain.on("open-electron-website", this.goElectronWebsite.bind(this));
        ipcMain.on('app-close', this.onAppClose.bind(this));
        this.setIpcRequest();
    }

    private async goElectronWebsite() {
        shell.openExternal('https://www.electronjs.org/');
    }

    private async onAppClose() {
        app.quit();
    }
    setIpcRequest() {
        const { http } = this.app;
        setIpcReplier("get-random-word", http.getRandomBg.bind(http))
    }
}
