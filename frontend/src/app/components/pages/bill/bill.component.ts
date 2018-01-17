import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Bill } from '../../../models/bill';
import { MessageService } from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.less']
})

export class BillComponent implements OnInit {

  displayDialog: boolean;
  bill: Bill=new Bill();
  selectedBill: Bill;
  newBill: boolean;
  bills: Bill[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
     this.apiService.get('api/bill').subscribe(res =>{    
     this.bills = res;
     console.log(this.bills[0].id);
    });
  }

  showDialogToAdd() {
    this.newBill = true;
    this.bill= new Bill();
    this.displayDialog =true;
  }
  save() {

    let bills = [...this.bills];
    if(this.newBill)
      bills.push(this.bill);
    else
      bills[this.findSelectedBillIndex()] = this.bill;

    this.bills= bills;
    this.bill=null;
    this.displayDialog=false;
  } 

  edit() {
    this.apiService.put('api/bill/' + this.selectedBill.id, this.bill).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}


  delete() {
    let index = this.findSelectedBillIndex();
    this.bills=this.bills.filter((val,i) => i!=index);
    this.bill=null;
    this.displayDialog=false;
  }    

  onRowSelect(event) {
    this.newBill = false;
    this.bill = this.cloneBill(this.selectedBill);
   console.log(this.bills);
    this.displayDialog = true;
  }

  cloneBill(b: Bill): Bill {
    let bill = new Bill();
    for(let prop in b) {
      bill[prop] = b[prop];
    }
    return bill;

  }

 findSelectedBillIndex(): number {
    return this.bills.indexOf(this.selectedBill);
 }
}
