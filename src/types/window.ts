import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { join } from 'path';
import { format } from 'url';

interface CreateWindowOptions extends BrowserWindowConstructorOptions {
  lazyRender?: boolean;
}

export abstract class Window {
  private window: BrowserWindow;
  protected abstract width: number;
  protected abstract height: number;
  protected abstract name: string;

  public createWindow(options?: CreateWindowOptions) {
    return new Promise(resolve => {
      this.window = new BrowserWindow({
        width: this.width,
        height: this.height,
        resizable: false,
        frame: false,
        show: false,
        webPreferences: {
          nodeIntegration: true,
          devTools: !app.isPackaged,
        },
        ...options,
      });

      if (!options?.lazyRender) {
        this.window.once('ready-to-show', this.window.show);
      }

      this.window.webContents.once('crashed', () => app.relaunch());

      this.window.webContents.once('dom-ready', () => {
        this.created();
        resolve(undefined);
      }
      );


      if (app.isPackaged) {
        this.window.loadURL(
          format({
            protocol: 'file:',
            slashes: true,
            pathname: join(__dirname, `./dist/ui/${this.name}.html`),
          }),
        );
      } else {
        this.window.loadURL(`http://localhost:8080/${this.name}.html`);
      }
    });
  }

  abstract created(): void;

  public getWindow() {
    return this.window;
  }

  public send(channel: string, ...args: any[]) {
    this.window?.webContents?.send(channel, ...args);
  }

  public show() {
    this.window?.show();
  }

  public close() {
    this.window?.close();
  }

  public hide() {
    this.window?.hide();
  }
}
