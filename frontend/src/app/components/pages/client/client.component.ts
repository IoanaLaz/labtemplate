import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  displayDialog: boolean;

  clients;

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
     this.apiService.get('api/client').subscribe(res =>{    
     this.clients = res;
     console.log(this.clients[0].id);
    });
  }
}
