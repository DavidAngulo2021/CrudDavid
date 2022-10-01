import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DefectuosoApiService } from 'src/app/defectuoso-api.service';

@Component({
  selector: 'app-show-defectuoso',
  templateUrl: './show-defectuoso.component.html',
  styleUrls: ['./show-defectuoso.component.css']
})
export class ShowDefectuosoComponent implements OnInit {

  DefectuosoList$!:Observable<any[]>;
  DefectuosoTypeList$!:Observable<any[]>;
  DefectuosoTypeList:any=[];

  //----------------------------//

  defectuosoTypeMap:Map<number,string>=new Map()
  constructor(private service:DefectuosoApiService) { }

  ngOnInit(): void {

    this.DefectuosoList$=this.service.getDefectuosoList();
    this.DefectuosoTypeList$=this.service.getWebApitypeList();
    this.refreshDefectuosoTypeMAp();
  }

  //variable 
  modalTitle:string='';
  activateAddEditProducto:boolean = false;
  producto:any;

  modalAdd(){
    this.DefectuosoTypeList={
      id:0,  
      estado:null,
      comentario:null,
      webApitypeid:null
    }
    this.modalTitle="Agregar Productos";
    this.activateAddEditProducto =true;
  }

  modalclose(){
    this.activateAddEditProducto=false;
    this.DefectuosoList$= this.service.getDefectuosoList();
  }

refreshDefectuosoTypeMAp(){

this.service.getWebApitypeList().subscribe(data=>{
  this.DefectuosoTypeList = data;
  
  for(let i=0; i< data.length; i++)
  {
    this.defectuosoTypeMap.set(this.DefectuosoTypeList[i].id,this.DefectuosoTypeList[i].
      productoname);
  }
})  

  }

}
