import { Transaction } from '../model/Transaction';
import {
  TransactionActions,
  TransactionsActionTypes
} from './transaction-action';

export interface TransactionState {
  transaction: Transaction[];
}

export const initialState: TransactionState = {
  transaction: <Transaction[]>[]
};

export function transactionReducer(
  state = initialState,
  action: TransactionActions
): TransactionState {
  switch (action.type) {
    case TransactionsActionTypes.AddTransaction:
      return {
        ...state,
        transaction: [...state.transaction, action.transaction]
      };
    case TransactionsActionTypes.ClearTransaction:
      return {
        ...initialState
      };
    default:
      return { ...state };
  }
}
