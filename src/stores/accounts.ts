import { defineStore } from "pinia";
import { Account, type IAccount } from "../models/account";
import { BadStatus, OkStatus, type IStatus } from "../models/status";

export const useAccountStore = defineStore("account", {
  state: () => ({
    accounts: [] as IAccount[],
  }),
  actions: {
    isAccountExist(account: Account): boolean {
      return this.accounts.findIndex((x) => x.login == account.login) != -1;
    },

    add(account: Account): IStatus {
      if (this.isAccountExist(account)) {
        return new BadStatus("Account exist");
      }

      this.accounts.push(account);
      return new OkStatus(account);
    },

    remove(account: Account): IStatus {
      if (!this.isAccountExist(account)) {
        return new BadStatus("Account not exist");
      }
      const index = this.accounts.findIndex((x) => x.login == account.login);
      if (index == -1) return new BadStatus("find index error");

      const _accounts = this.accounts.splice(index, 1);
      return new OkStatus(_accounts);
    },
  },
  getters: {
    accounts: (state) => state.accounts,
  },
});
