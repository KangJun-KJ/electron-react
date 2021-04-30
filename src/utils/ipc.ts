import { IpcMainEvent, ipcMain } from 'electron';
import { IpcRequest } from '@ui/types';

interface IIpcHandler {
  (...args: any[]): Promise<{ data: any }>;
}

export function setIpcReplier(channel: IpcRequest, handler: IIpcHandler) {
  ipcMain.handle(channel, async (_: IpcMainEvent, ...args: any[]) => {
    try {
      const { data } = await handler(...args);
      return { success: true, data };
    } catch (e) {
      return { success: false, message: e.message };
    }
  });
}
