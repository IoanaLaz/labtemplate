import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.less']
})
@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.less']
})
export class DrugComponent implements OnInit {

  displayDialog: boolean;

  drugs;

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
     this.apiService.get('api/drug').subscribe(res =>{    
     this.drugs = res;
     console.log(this.drugs[0].id);
    });
  }
}
