import { TransactionState } from './transaction-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const getTransactionState = createFeatureSelector<TransactionState>('transaction');

const getTransactions = createSelector(getTransactionState, (state: TransactionState) => state.transaction);

export const transactionQuery = {
  getTransactions
};
