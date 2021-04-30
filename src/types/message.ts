export type MessageFlag =
  | 'LOGIN'
  | 'LOGOUT'
  | 'INIT_TASK'
  | 'ADD_DS_TASK'
  | 'EDIT_DS_TASK'
  | 'DEL_DS_TASK'
  | 'ADD_JK_TASK'
  | 'EDIT_JK_TASK'
  | 'DEL_JK_TASK'
  | 'ADD_ONCE_TASK'
  | 'REPORT_TASK_STATUS'
  | 'SEND_TASK_STATUS'
  | 'REMOVE_PERMIT_FOR_RUNNER';

export interface Message {
  data: any;
  messageFlag: MessageFlag;
}
