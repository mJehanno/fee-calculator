import { Action } from '@ngrx/store';
import { Transaction } from '../model/Transaction';


export enum TransactionsActionTypes {
  AddTransaction = ''
}

export class AddTransaction implements Action {
  readonly type = TransactionsActionTypes.AddTransaction;

  constructor(public transaction: Transaction) {
  }

}

export type TransactionActions = AddTransaction;
