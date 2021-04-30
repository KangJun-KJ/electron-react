import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Application } from '../app';

export class Http {
  private core: AxiosInstance;

  constructor(private readonly app: Application) {
    this.create();
  }
  private create() {
    this.core = axios.create({
      baseURL: process.env.config.url + 'rpa',
    });
    this.core.interceptors.request.use(config => this.requestPipe(config));
    this.core.interceptors.response.use(
      res => this.responsePipe(res),
      err => this.errorPipe(err),
    );
  }

  private async requestPipe(config: AxiosRequestConfig) {
    return config;
  }

  private async responsePipe(res: AxiosResponse) {
    if (res.status === 200 && res.data.code === '0') {
      return res;
    }
    return Promise.reject(res);
  }

  private async errorPipe(err: AxiosError) {

    return Promise.reject(err);
  }

  public getRandomBg() {
    return axios.get("https://v1.jinrishici.com/all.json")
  }

}
