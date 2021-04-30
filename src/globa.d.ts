import { Cache } from './types';

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      config: {
        url: string;
        update: string;
        socket: string;
        crypto_key: string;
        crypto_iv: string;
        report_error_token: string;
        duplicate_task_token: string;
      };
      NODE_ENV: 'development' | 'production';
    }
  }
}
