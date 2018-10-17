import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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

  feeForm: FormGroup;

  ngOnInit() {
    this.feeForm = this.fb.group({
      label: ['', Validators.required],
      amount: ['', Validators.compose([Validators.required, Validators.min(0)])],
      type: ['', Validators.required]
    });
  }

  addFee() {
    if (this.feeForm.invalid) {
      this.snackbar.open(this.errorMessage, 'Undo');
    } else {
      this.store.dispatch(new AddTransaction(this.feeForm.value));
      this.feeForm.reset();
    }
  }

}
