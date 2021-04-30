import moment from 'moment';
import { TaskRecord, Company } from '../types';

interface NewVersion {
  packageDownloadUrl: string;
  packageName: string;
  packageRemark: string;
  updateType: string;
  version: string;
  versionNumber: string;
}

interface DateIngore {
  date: moment.Moment;
  ignore: boolean;
}

export class Context {
  public nowTask: TaskRecord | null = null;
  public dateIgnore: DateIngore | null = null;
  public company: Company | null = null;
  public license: string;
  public enabled: boolean = false;
  public closeOnExit: boolean = true;
  public showPopup: boolean = true;
  public newVersion: NewVersion;
  public rpaAuthToken: string;
  public autoUpdate: boolean;
  public runFlag: boolean;
  public runnerName: string;
  public startupPwd: string;
  public autoUnlockFlag: boolean;
  public gettingIgnoreDate: boolean = false;
}
