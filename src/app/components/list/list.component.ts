import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  transactions: any[] = [];

  displayColumns = ['Label', 'Type', 'Amount'];

  constructor() { }

  ngOnInit() {
    this.getFees();
  }

  getFees() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(key);
      const value = JSON.parse(localStorage.getItem(key));
      this.transactions.push({
        label: key,
        amount: value.amount,
        type: value.type
      });
    }
  }

  calculamount() {
    const credit = this.transactions.filter(transaction =>
      transaction.type === 'credit'
    );
    const debit = this.transactions.filter(transaction =>
      transaction.type === 'debit'
    );
    const totalCredit = credit.map(t => t.amount).reduce((acc, value) => acc + value, 0);
    const totalDebit = debit.map(t => t.amount).reduce((acc, value) => acc + value, 0);
    return totalCredit - totalDebit;
  }

}
