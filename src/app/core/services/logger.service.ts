import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  info(message: string, data?: any) {
    console.log('[INFO]', message, data);
  }

  warn(message: string, data?: any) {
    console.warn('[WARN]', message, data);
  }
  error(message: string, error?: any) {
    console.error('[ERROR]', message, error);
    this.sendToServer({ level: 'error', message, error });
  }
  sendToServer(log: any) {
    // send to server backend api call
    // sentry LogRocket
    // Send to backend server or external logging system
    // Example: POST to /api/logs
    // You can inject HttpClient and call API here
  }
}
