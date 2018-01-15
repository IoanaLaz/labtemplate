import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.less']
})
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.less']
})
export class BillComponent implements OnInit {

  displayDialog: boolean;

  bills;

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
     this.apiService.get('api/bill').subscribe(res =>{    
     this.bills = res;
     console.log(this.bills[0].id);
    });
  }
}
