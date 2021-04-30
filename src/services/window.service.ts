import { BrowserWindow } from 'electron';
import { Service, Window } from '../types';
import { WorkspaceWindow } from '../windows';

export class WindowService extends Service {
  private window: Window | null;
  private workspaceWindow = new WorkspaceWindow();

  run() {
    this.app.on('app-ready', this.onAppReady.bind(this));
    this.app.on('toast', this.onToast.bind(this));
  }

  public getWindow(): BrowserWindow {
    return this.window?.getWindow() as BrowserWindow;
  }

  private async onAppReady() {
    this.showWindow(this.workspaceWindow);
  }

  private async showWindow(window: Window) {
    if (this.window !== window) {
      await window.createWindow();
      this.window?.hide();
      this.window = window;
    }
  }

  private onToast(message: string) {
    this.send('toast', message);
  }

  private send(channel: string, ...args: any[]) {
    this.window?.send(channel, ...args);
  }


}
