import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';  
import { Client } from '../client';  
import { Observable,Subject } from "rxjs";  

import {FormControl,FormGroup,Validators} from '@angular/forms';  

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  constructor(private clientservice:ClientService) { }  
  
  clientsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  kpiCliente:any;  
  detail:any;  
  clients: Observable<Client[]>;  
  client: Observable<Client>; ;  
   
  
  ngOnInit() {  

    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 10, 15, 20, -1], [5, 10, 15, 20, "All"]],  
      processing: true  
    }; 
    
    this.detail = new Client();

    this.clientservice.getClientList().subscribe(data =>{  
    this.clients =data;  
    this.dtTrigger.next();  
    })  

    this.clientservice.getKpi().subscribe(data =>{  
      this.kpiCliente =data;    
    }) 

  }  
    
  detailClient(id: String){  
    this.clientservice.getClient(id)  
      .subscribe(  
        data => {  
          this.detail = data             
        },  
        error => console.log(error));  
  }  
 
  clean(){

    this.detail = new Client();

  }
}  