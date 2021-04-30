export enum TaskRunWay {
  执行一次 = 0,
  每周 = 1,
  每月 = 2,
}

export enum TaskModel {
  定时任务 = '0',
  接口任务 = '1',
  手动任务 = '2',
}

export enum TaskStatus {
  等待执行 = '0',
  执行中 = '1',
  执行成功 = '2',
  执行失败 = '3',
  任务暂停 = '4',
  强制终止 = '5',
}

export const taskStatusMap = new Map<TaskOperation, TaskStatus>()
  .set('stop', TaskStatus.强制终止)
  .set('continue', TaskStatus.执行中)
  .set('pause', TaskStatus.任务暂停);

export function getOperationType(runStatus: TaskStatus): TaskOperation {
  switch (runStatus) {
    case TaskStatus.任务暂停:
      return 'pause';
    case TaskStatus.强制终止:
      return 'stop';
    default:
      return 'continue';
  }
}

export type TaskOperation = 'stop' | 'continue' | 'pause';

interface RunTime {
  runStartTime: string;
  runEndTime: string;
  id: number;
}

export interface Task {
  taskId: string;
  taskModel: TaskModel;
  taskName: string;
  robotUrl: string;
  runStatus: TaskStatus;
  robotId: string;
  robotVersion: string;
  updateReason: string;
  screenRecordFlag: boolean;
  fullLogRecordFlag: boolean;
  robotName: string;
  userId: string;
  overtime: number;
  developer: string;
  originalBw: string;
  bwUrl?: string;
  dsTaskRunnerTimeId?: string;
  runStartTimeLimit?: string;
  runnerId?: string;
  remains: number;
}

export interface TaskRecord extends Task {
  recordId: string;
  startTime: string;
}

export interface DsTask extends Task {
  startDate: string;
  taskRunWay: TaskRunWay;
  runStartTimeLimit: string;
  runStartTime: string;
  runEndTime: string;
  runningInterval: number;
  runningIntervalStartTime: string;
  runningIntervalEndTime: string;
  wayDetail: string;
  runningType: '0' | '1';
  removeDateList: string;
  runnerTimeDataList?: RunTime[];
  endDate?: string;
  removeDateFlag?: '0' | '1'; // 0 跳过节假日, 1 跳过自定义日期
}

export interface MonthlyDsTask extends DsTask {
  setDate: string;
}

export function getStatus(status: TaskStatus) {
  const map = {
    0: '等待执行',
    1: '执行中',
    2: '执行成功',
    3: '执行失败',
    4: '任务暂停',
    5: '强制终止',
  };
  return status in map ? map[status] : status;
}

export function getModel(taskModel: TaskModel) {
  const map = {
    '0': '定时任务',
    '1': '接口任务',
    '2': '手动任务',
  };
  return taskModel in map ? map[taskModel] : taskModel;
}
