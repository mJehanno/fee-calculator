import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { AddTransaction } from '../../+state/transaction-action';
import { TransactionState } from '../../+state/transaction-reducer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  constructor(private fb: FormBuilder, public snackbar: MatSnackBar, private store: Store<TransactionState>) {

  }

  @Input()
  errorMessage: string;

  feeForm = this.fb.group({
    label: ['', Validators.required],
    amount: ['', Validators.compose([Validators.required, Validators.min(0)])],
    type: ['', Validators.required]
  });

  ngOnInit() {
  }

  addFee() {
    if (this.feeForm.invalid) {
      this.snackbar.open(this.errorMessage, 'Undo');
    } else {
      localStorage.setItem(this.feeForm.value.label, JSON.stringify({ amount: this.feeForm.value.amount, type: this.feeForm.value.type }));
      this.store.dispatch(new AddTransaction(this.feeForm.value));
    }
  }

}
