import { app } from 'electron';
import { Window } from '../types';

export class WorkspaceWindow extends Window {
  protected width = 1366;
  protected height = 768;
  protected name = 'workspace';

  created() {
    const window = this.getWindow();
    window.addListener('hide', () => window.setSkipTaskbar(true));
    window.addListener('show', () => window.setSkipTaskbar(false));
    window.addListener('close', () => app.quit());
  }
}
