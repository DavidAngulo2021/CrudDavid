import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DefectuosoApiService } from 'src/app/defectuoso-api.service';


@Component({
  selector: 'app-add-edit-defectuoso',
  templateUrl: './add-edit-defectuoso.component.html',
  styleUrls: ['./add-edit-defectuoso.component.css']
})
export class AddEditDefectuosoComponent implements OnInit {

defectuosoList$!: Observable<any[]>;
estadoList$!: Observable<any[]>;
defectuosotypelist$!: Observable<any[]>;

  constructor(private service:DefectuosoApiService) { }

  ngOnInit(): void {

    this.id=this.defectuoso.id;
    this.estado=this.defectuoso.estado;
    this.comentario=this.defectuoso.comentario;
    this.webApitypeid=this.defectuoso.webApitypeid;
    this.estadoList$=this.service.getEstadosList();
    this.defectuosoList$= this.service.getDefectuosoList();
    this.defectuosotypelist$=this.service.getWebApitypeList();
    

  }

  @Input() defectuoso:any;
  id:number=0;
  estado:string="";
  comentario: string="";
  webApitypeid!:number;


  addDefectuoso(){
    var defectuoso={
      estado:this.estado,
      comentario:this.comentario,
      webApitypeid:this.webApitypeid  
    }



    this.service.addDefectuoso(this.defectuoso).subscribe (res=>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess= document.getElementById('add-succes-alert');
      if(showAddSuccess){
        showAddSuccess.style.display="block"
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display="none"
        }
      },4000);
    })

  }
  ActualizarProductos(){

  }

 
 }


