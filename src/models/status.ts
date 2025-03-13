export interface IStatus {
  status: boolean;
  message?: string;
  data?: any;
}

export class BadStatus implements IStatus {
  status: boolean;
  message?: string;
  constructor(message: string) {
    (this.status = false), (this.message = message);
  }
}

export class OkStatus implements IStatus {
  status: boolean;
  message?: string;
  data?: any;
  constructor(data?: any, message: string | undefined = undefined) {
    (this.status = true), (this.message = message), (this.data = data);
  }
}
