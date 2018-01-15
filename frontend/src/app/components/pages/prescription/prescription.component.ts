import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.less']
})
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.less']
})
export class PrescriptionComponent implements OnInit {

  displayDialog: boolean;

  prescriptions;

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
     this.apiService.get('api/prescription').subscribe(res =>{    
     this.prescriptions = res;
     console.log(this.prescriptions[0].id);
    });
  }
}
