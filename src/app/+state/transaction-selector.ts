import { TransactionState } from './transaction-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const getTransactionState = createFeatureSelector<TransactionState>('transactions');

const getTransactions = createSelector(getTransactionState, (state: TransactionState) => {
  console.log('uh');

  return state.transaction;
});

export const transactionQuery = {
  getTransactions
};
