import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Client } from '../../../models/client';
import { MessageService } from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

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
     console.log("called");
    });
  } 

  showDialogToAdd() {
    this.newClient = true;
    this.client= new Client();
    this.displayDialog =true;
  }
  save() {
    this.apiService.post('api/client',this.client).subscribe(res => {
      this.refresh();
    });
    this.displayDialog=false;
  } 

  
  edit() {
    this.apiService.put('api/client/' + this.selectedClient.id, this.client).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}

  delete() {
    this.apiService.delete('api/client/' + this.selectedClient.id).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}  

  onRowSelect(event) {
    this.newClient= false;
    this.client = this.cloneClient(this.selectedClient);
   console.log(this.clients);
    this.displayDialog = true;
  }

  cloneClient(c: Client): Client {
    let client = new Client();
    for(let prop in c) {
      client[prop] = c[prop];
    }
    return client;

  }

 findSelectedClientIndex(): number {
    return this.clients.indexOf(this.selectedClient);
 }
}
