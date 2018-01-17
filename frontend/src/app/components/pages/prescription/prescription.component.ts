import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Prescription } from '../../../models/prescription';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.less']
})

export class PrescriptionComponent implements OnInit {

  displayDialog: boolean;
  prescription: Prescription=new Prescription();
  selectedPrescription: Prescription;
  newPrescription: boolean;
  prescriptions: Prescription[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
     this.apiService.get('api/prescription').subscribe(res =>{    
     this.prescriptions = res;
     console.log(this.prescriptions[0].id);
    });
  }

  showDialogToAdd() {
    this.newPrescription = true;
    this.prescription= new Prescription();
    this.displayDialog =true;
  }
  save() {
    let prescriptions = [...this.prescriptions];
    if(this.newPrescription)
      prescriptions.push(this.prescription);
    else
      prescriptions[this.findSelectedPrescriptionIndex()] = this.prescription;

    this.prescriptions= prescriptions;
    this.prescription=null;
    this.displayDialog=false;
  } 

  delete() {
    let index = this.findSelectedPrescriptionIndex();
    this.prescriptions=this.prescriptions.filter((val,i) => i!=index);
    this.prescription=null;
    this.displayDialog=false;
  }    

  onRowSelect(event) {
    this.newPrescription = false;
    this.prescription = this.clonePrescription(event.data);
    this.displayDialog = true;
  }

  clonePrescription(p: Prescription): Prescription {
    let prescription = new Prescription();
    for(let prop in p) {
      prescription[prop] = p[prop];
    }
    return

  }

 findSelectedPrescriptionIndex(): number {
    return this.prescriptions.indexOf(this.selectedPrescription);
 }
}
