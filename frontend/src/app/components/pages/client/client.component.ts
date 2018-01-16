import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})

export class ClientComponent implements OnInit {

  displayDialog: boolean;

  client: Client=new Client();
  selectedClient: Client;
  newClient: boolean;
  clients: Client[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
     this.apiService.get('api/client').subscribe(res =>{    
     this.clients = res;
     console.log(this.clients[0].id);
    });
  }

  showDialogToAdd() {
    this.newClient = true;
    this.client= new Client();
    this.displayDialog =true;
  }
  save() {
    this.apiService.post('api/client', this.client).subscribe(res => {
      console.log(res);
      });
      this.client = new Client();
    this.displayDialog = false;
    this.ngOnInit();
  } 
  edit(){
    this.apiService.put('api/client/' + this.selectedClient.id, this.client).subscribe(res =>{    
        console.log(res);
    }); 
    this.client = new Client(); 
    this.displayDialog = false;
    this.ngOnInit();
  }

  delete() {
    this.apiService.delete('api/client/' + this.selectedClient.id).subscribe();
    this.client = new Client(); 
    this.displayDialog = false;
    this.ngOnInit();
  }    

  onRowSelect(event) {
    this.newClient = false;
    this.client = this.cloneClient(this.selectedClient);
    this.displayDialog = true;
  }

  cloneClient(c: Client): Client {
    let user = new Client();
    for(let prop in c) {
      user[prop] = c[prop];
    }
    return user;
  } 

/* findByIdClientIndex(): number {
    return this.client.findById(this.selectedClient);
 }*/
}