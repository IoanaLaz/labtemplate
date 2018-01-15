import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.less']
})
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.less']
})
export class SaleComponent implements OnInit {

  displayDialog: boolean;

  sales;

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
     this.apiService.get('api/sale').subscribe(res =>{    
     this.sales = res;
     console.log(this.sales[0].id);
    });
  }
}
