import { app } from 'electron';
import { resolve } from 'path';

export function getStaticPath() {
  const root = app.isPackaged ? process.resourcesPath : process.cwd();

  return resolve(root, 'static');
}
