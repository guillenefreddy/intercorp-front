import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class ClientService {  
  
  private baseUrl = 'http://3.138.190.81:8000/client/';  
  
  constructor(private http:HttpClient) { }  
  
  getClientList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'listclientes');  
  }  
  
  createClient(client: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'creacliente', client);  
  }  
  
  getClient(id: String): Observable<Object> {  
    return this.http.get(`${this.baseUrl}obtenercliente/${id}`);  
  }  
  
  getKpi(): Observable<Object> {  
    return this.http.get(`${this.baseUrl}`+'kpideclientes');  
  }  

}  

