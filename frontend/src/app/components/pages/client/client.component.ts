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
     console.log(this.clients[0].id);
    });
  } 

  showDialogToAdd() {
    this.newClient = true;
    this.client= new Client();
    this.displayDialog =true;
  }
  save() {
    let clients = [...this.clients];
    if(this.newClient)
      clients.push(this.client);
    else
      clients[this.findSelectedClientIndex()] = this.client;

    this.clients= clients;
    this.client=null;
    this.displayDialog=false;
  } 

  
  edit() {
    this.apiService.put('api/client/' + this.selectedClient.id, this.client).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}

  delete() {
    let index = this.findSelectedClientIndex();
    this.clients=this.clients.filter((val,i) => i!=index);
    this.client=null;
    this.displayDialog=false;
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
