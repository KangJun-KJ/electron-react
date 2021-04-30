import { ipcRenderer } from 'electron';
import { IpcRequest } from '../types';

interface IIpcReply {
  success: boolean;
  message?: string;
  data?: any;
}

export async function ipcSend(channel: IpcRequest, ...reqArgs: any[]) {
  return new Promise(async (resolve, reject) => {
    const res: IIpcReply = await ipcRenderer.invoke(channel, ...reqArgs);
    res.success ? resolve(res.data) : reject(res.message);
  });
}
