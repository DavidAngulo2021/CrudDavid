import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefectuosoApiService {

readonly defectuosoAPIUrl = "https://localhost:7289/api";

  constructor(private http:HttpClient) { }

  getDefectuosoList():Observable<any[]>{

    return this.http.get<any>(this.defectuosoAPIUrl + '/defectuosoes')
  }

  addDefectuoso(data:any){
    return this.http.post(this.defectuosoAPIUrl + '/defectuosoes',data);
  }

  updateDefectuoso(id:number|string, data:any){
    return this.http.put(this.defectuosoAPIUrl +`/defectuosoes/${id}`,data);
  }

  deleteDefectuoso(id:number|string){

    return this.http.delete(this.defectuosoAPIUrl + `/defectuosoes  /${id}`);
  }

  


  /////WebAwpiType///

  getWebApitypeList():Observable<any[]>{

    return this.http.get<any>(this.defectuosoAPIUrl + '/WebApiTypes')
  }

  addWebApitype(data:any){
    return this.http.post(this.defectuosoAPIUrl + '/WebApiTypes',data);
  }

  updateWebApitype(id:number|string, data:any){
    return this.http.put(this.defectuosoAPIUrl +`/WebApiTypes/${id}`,data);
  }

  deleteWebApitype(id:number|string){

    return this.http.delete(this.defectuosoAPIUrl + `/WebApiTypes/${id}`);
  } 



  /// Estados///

  getEstadosList():Observable<any[]>{

    return this.http.get<any>(this.defectuosoAPIUrl + '/Estadoes')
  }

  addEstados(data:any){
    return this.http.post(this.defectuosoAPIUrl + '/Estadoes',data);
  }

  updateEstado(id:number|string, data:any){
    return this.http.put(this.defectuosoAPIUrl +`/Estadoes/${id}`,data);
  }

  deleteEstado(id:number|string){

    return this.http.delete(this.defectuosoAPIUrl + `/Estadoes/${id}`);
  } 


}
