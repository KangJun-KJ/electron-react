import { remote } from 'electron';

const win = remote.getCurrentWindow();

export function quit() {
  remote.app.quit();
}

export function minimize() {
  win.minimize();
}

export function maximize() {
  const isFullScreen = win.isFullScreen();
  win.setFullScreen(!isFullScreen);
}
