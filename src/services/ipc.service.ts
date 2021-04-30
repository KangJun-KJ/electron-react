import { Service } from '../types'
import { logger, setIpcReplier } from '../utils';
import { app, ipcMain } from 'electron'；

export class IpcService extends Service {
    run() {
        this.setIpcRequest();
        ipcMain.on('app-close', this.onAppClose.bind(this));
    }

    private async onAppClose() {
        app.quit();
    }
    setIpcRequest() {
        const { http } = this.app;
        setIpcReplier("get-random-word", http.getRandomBg.bind(http))
    }
}
