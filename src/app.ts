import { EventEmitter } from 'events';
import { Http } from './libs';
import { WindowService, IpcService } from './services';
import { Context } from './types';

export class Application extends EventEmitter {
  // app公用状态
  public readonly context = new Context();

  // app公用逻辑模块
  public readonly windowService = new WindowService();
  public readonly ipcService = new IpcService()

  // app公用lib
  public http = new Http(this);

  public run() {
    this.windowService.plugin(this);
    this.ipcService.plugin(this);
    this.start();
  }

  private start() {
    this.emit('app-ready');
  }
}
