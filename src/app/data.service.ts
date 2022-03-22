import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://localhost:7229";
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization' , 'Basic a3J1bjIxMDJAZ21haWwuY29tOktydXh5ejEy')

  constructor(private httpClient: HttpClient) { }
  public getAll(){
    return this.httpClient.get(this.REST_API_SERVER + '/device' , {'headers' : this.headers});
  }
  public getData(id:number){
    return this.httpClient.get(this.REST_API_SERVER + '/device/' + id , {'headers' : this.headers} );
  }
}