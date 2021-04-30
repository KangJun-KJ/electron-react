import { TaskModel, TaskStatus } from '.';

export interface Report {
  userId: string;
  runnerCode: string;
  taskId: string;
  currentRunStatus: TaskStatus;
  runStatus: TaskStatus;
  localTime: string;
  taskModel: TaskModel;
  taskName: string;
  recordId: string;
  respBw?: string;
  flashCosKey?: string;
  errorLog?: string;
  dsTaskRunnerTimeId?: string;
  startTime?: string;
}

export interface History {
  robotId: string;
  robotName: string;
  robotVersion: string;
  runStatus: string;
  taskId: string;
  taskModel: string;
  recordId: string;
  taskName: string;
  startTime: string;
  logPath?: string;
  errorLog?: string;
}

export type VideoReport = Pick<Report, 'taskModel' | 'taskId' | 'recordId' >;

export enum UploadFileType {
  图片 = '0',
  普通文件 = '1',
  日志 = '2',
}
