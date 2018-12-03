import { TransactionState } from './transaction-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getTransactionState = createFeatureSelector<TransactionState>(
  'transaction'
);

/**
 * * The current selector is made to just take what we need from the state
 */
const getTransactions = createSelector(
  getTransactionState,
  (state: TransactionState) => state.transaction
);

export const transactionQuery = {
  getTransactions
};
