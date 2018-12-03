import { Action } from '@ngrx/store';
import { Transaction } from '../model/Transaction';

export enum TransactionsActionTypes {
  AddTransaction = '[Transaction] Add',
  ClearTransaction = '[Transaction] Clear',
  RemoveTransaction = '[Transaction] Remove',
  UpdateTransaction = '[Transaction] Update'
}

/**
 * * Action made to create a new transaction
 */
export class AddTransaction implements Action {
  readonly type = TransactionsActionTypes.AddTransaction;

  constructor(public transaction: Transaction) {}
}

/**
 * * Action made to clear the transaction table.
 */
export class ClearTransaction implements Action {
  readonly type = TransactionsActionTypes.ClearTransaction;
}

/**
 * * Action made to remove a transaction from the transaction table.
 */
export class RemoveTransaction implements Action {
  readonly type = TransactionsActionTypes.RemoveTransaction;
}

/**
 * * Action made to update a transaction from the transaction table.
 */
export class UpdateTransaction implements Action {
  readonly type = TransactionsActionTypes.UpdateTransaction;
}

export type TransactionActions =
  | AddTransaction
  | ClearTransaction
  | RemoveTransaction
  | UpdateTransaction;
