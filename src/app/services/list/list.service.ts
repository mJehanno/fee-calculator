import { Injectable, OnChanges, SimpleChange } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  transactions: any[];


}
