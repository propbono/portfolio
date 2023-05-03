export interface IProcessEnv {
  PORT: number;
  BASE_URL: string;
  SECRET_SESSION: string;
}

declare global {
  namespace NodeJS {
    interface Process {
      env: { [key: string]: string } & IProcessEnv;
    }
  }
}
