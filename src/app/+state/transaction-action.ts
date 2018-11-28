import { Action } from '@ngrx/store';
import { Transaction } from '../model/Transaction';

export enum TransactionsActionTypes {
  AddTransaction = '[Transaction] Add',
  ClearTransaction = '[Transaction] Clear',
  RemoveTransaction = '[Transaction] Remove',
  UpdateTransaction = '[Transaction] Update'
}

export class AddTransaction implements Action {
  readonly type = TransactionsActionTypes.AddTransaction;

  constructor(public transaction: Transaction) {}
}

export class ClearTransaction implements Action {
  readonly type = TransactionsActionTypes.ClearTransaction;
}

export class RemoveTransaction implements Action {
  readonly type = TransactionsActionTypes.RemoveTransaction;
}

export class UpdateTransaction implements Action {
  readonly type = TransactionsActionTypes.UpdateTransaction;
}

export type TransactionActions =
  | AddTransaction
  | ClearTransaction
  | RemoveTransaction
  | UpdateTransaction;
