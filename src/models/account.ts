export interface IAccount {
  labels?: string[];
  type: AccountType;
  login?: string;
  password?: string;
}

export enum AccountType {
  local = "local",
  LDAP = "LDAP",
}

export class Account implements IAccount {
    labels?: string[];
    type: AccountType;
    login?: string;
    password?: string;

    constructor(data: IAccount) {
        this.labels = data.labels?.length == 0 || data.labels !== undefined  ? [] : data.labels
        this.type = data.type === undefined ? AccountType.local : data.type
        this.login = data.login
        this.password = data.password
    }
}