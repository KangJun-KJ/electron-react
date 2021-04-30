import { ipcSend } from '../utils/ipcRequest';

export function getrandomWrod() {
  return ipcSend('get-random-word');
}
