import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Transaction } from '../../model/Transaction';
import { Observable } from 'rxjs';
import { TransactionState } from '../../+state/transaction-reducer';

import { transactionQuery } from '../../+state/transaction-selector';
import { MatTableDataSource } from '@angular/material';
import { ClearTransaction } from '../../+state/transaction-action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  transactions: Transaction[] = [];
  transactions$: Observable<Transaction[]>;
  dataSource: MatTableDataSource<Transaction>;
  displayColumns = ['Label', 'Type', 'Amount'];

  constructor(private store: Store<TransactionState>) {
    this.transactions$ = store.pipe(select(transactionQuery.getTransactions));
    this.transactions$.subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  ngOnInit() {}

  /**
   * * function made to calculate de final amount in the table.
   * * it first filter the array on credit transaction, then on debit transaction.
   * * then it sums both filtered arrays to finaly substract debit sum to credit one.
   */
  calculamount() {
    if (this.transactions.length !== 0) {
      const credit = this.transactions.filter(
        transaction => transaction.type === 'credit'
      );
      const debit = this.transactions.filter(
        transaction => transaction.type === 'debit'
      );
      const totalCredit = credit
        .map(t => t.amount)
        .reduce((acc, value) => acc + value, 0);
      const totalDebit = debit
        .map(t => t.amount)
        .reduce((acc, value) => acc + value, 0);
      return totalCredit - totalDebit;
    } else {
      return 0;
    }
  }

  /**
   * * This function is called by the clear button, it dispatch a new ClearTransaction Action to our Store
   */
  clearTable() {
    this.store.dispatch(new ClearTransaction());
  }
}
