import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Sale } from '../../../models/sale';
import { MessageService } from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.less']
})

export class SaleComponent implements OnInit {

  displayDialog: boolean;
  sale: Sale=new Sale();
  selectedSale: Sale;
  newSale: boolean;
  sales: Sale[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
     this.apiService.get('api/sale').subscribe(res =>{    
     this.sales = res;
     console.log(this.sales[0].id);
    });
  }

  showDialogToAdd() {
    this.newSale = true;
    this.sale= new Sale();
    this.displayDialog =true;
  }
  save() {
    let sales = [...this.sales];
    if(this.newSale)
      sales.push(this.sale);
    else
      sales[this.findSelectedSaleIndex()] = this.sale;

    this.sales= sales;
    this.sale=null;
    this.displayDialog=false;
  } 

  delete() {
    let index = this.findSelectedSaleIndex();
    this.sales=this.sales.filter((val,i) => i!=index);
    this.sale=null;
    this.displayDialog=false;
  }    

  onRowSelect(event) {
    this.newSale = false;
    this.sale = this.cloneSale(event.data);
    this.displayDialog = true;
  }

  cloneSale(s: Sale): Sale {
    let sale = new Sale();
    for(let prop in s) {
      sale[prop] = s[prop];
    }
    return

  }

 findSelectedSaleIndex(): number {
    return this.sales.indexOf(this.selectedSale);
 }
}
