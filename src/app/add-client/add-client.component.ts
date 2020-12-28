import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';  
import {FormControl,FormGroup} from '@angular/forms';  
import { Client } from '../client';  

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})

export class AddClientComponent implements OnInit {

  constructor(private clientservice:ClientService) { }  
  
  client : Client=new Client();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  clientsaveform=new FormGroup({  
    client_name:new FormControl(),  
    client_lastname:new FormControl(),  
    client_age:new FormControl(),  
    client_birthday:new FormControl()  
  });  
  
  saveClient(saveClient){  
    this.client=new Client();     
    console.log("oki");
    this.client.name=this.clientName.value;  
    this.client.lastname=this.clientLastName.value;  
    this.client.age=this.clientAge.value;  
    this.client.birthday=this.clientBirthday.value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.clientservice.createClient(this.client)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.client = new Client();  
  }  
  
  get clientName(){  
    return this.clientsaveform.get('client_name');  
  }  
  
  get clientLastName(){  
    return this.clientsaveform.get('client_lastname');  
  }  
  
  get clientAge(){  
    return this.clientsaveform.get('client_age');  
  }  
  
  get clientBirthday(){  
    return this.clientsaveform.get('client_birthday');  
  }  

  addClientForm(){  
    this.submitted=false;  
    this.clientsaveform.reset();  
  }  

}  
