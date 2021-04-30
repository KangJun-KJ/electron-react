import { configure, getLogger } from 'log4js';
import { app } from 'electron';
import { join } from 'path';

const filename = 'logs/runner';

const isProduction = process.env.NODE_ENV === 'production';

configure({
  appenders: {
    console: { type: 'console' },
    file: {
      type: 'dateFile',
      filename: app.isPackaged ? join(app.getPath('userData'), filename) : filename,
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
    },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: isProduction ? 'info' : 'debug' },
  },
});

export const logger = getLogger('normal');
