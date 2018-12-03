import { Transaction } from '../model/Transaction';
import {
  TransactionActions,
  TransactionsActionTypes
} from './transaction-action';

/**
 * * TransactionState is just an array of Transaction type
 */
export interface TransactionState {
  transaction: Transaction[];
}

/**
 * * InitialState is just const set to the 0/initial state
 */
export const initialState: TransactionState = {
  transaction: <Transaction[]>[]
};

/**
 * * transactionReducer is a function made to modify the state depending on the action
 * @param state
 * @param action
 */
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
