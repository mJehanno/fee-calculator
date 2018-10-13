import { Transaction } from '../model/Transaction';
import { TransactionActions, TransactionsActionTypes } from './transaction-action';



export interface TransactionState {
  transaction: Transaction[];
}


export const initialState: TransactionState = {
  transaction: []
};


export function transactionReducer(state = initialState, action: TransactionActions) {
  switch (action.type) {
    case TransactionsActionTypes.AddTransaction:
      state.transaction.push({ ...action.transaction });
      console.log(state.transaction);
      return {
        ...state, transaction: [...state.transaction]
      };
  }
}
