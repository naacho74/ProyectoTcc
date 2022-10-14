
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';



@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent implements OnInit {

 
  datosZonas:any[]=[];
  cantiadadMercancia:any;
  
  constructor(public servicioZona:ZonasService,
    public servicioMercancia:MercanciasService) { 
    
    this.servicioZona.consultarZonas()
    
      .subscribe(respuesta=>{
        ;

        console.log(respuesta);
        this.datosZonas=respuesta
        
        console.log(this.datosZonas)
      })

    
  }
 

  retirarMercancia(idMercancia:any):void{

    this.servicioMercancia.retirarMercancia(idMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    })
    
  }
  tablas:boolean = false;

  public visibleTablas(){
    console.log(this.tablas)
      this.tablas=true;
    

    console.log(this.tablas)
  }
  alertaDeNovedad(novedad:String):void{
    console.log('alerta')
    Swal.fire({
    html:`<b class="alerta text-center">${novedad}</b> `,
   icon:'warning',
   width:'40%',
   footer:'<i class="bi bi-exclamation-square-fill text-center"></i>  Novedad Mercancia  <i class="bi bi-exclamation-square-fill"></i>',
   timer:5000,
   toast:true,
  })

  }


   ampliarInfoAlerta(
    id:any,descripcion:any,
  volumen:any,nombreRemitente:any,idRemitente:any,direccionRemitente:any,deptoRemitente:any,municipioRemitente:any,nombredestinatario:any,iddestinatario:any,direccionDestinatario:any,deptoDestinatario:any,municipioDestinatario:any
  ):void{

    Swal.fire({
      html:`<div>
      <p>Iup Mercancia: <b> ${id} </b> </p>
      <p>Volumen: <b> ${volumen} </b></p>
      <p> Descripcion: <b> ${descripcion} </b></p>
      <h3>Remitente</h3>
      <hr>
      <p>Nombre Remitente: <b> ${nombreRemitente} </b></p>
      <p>Identificacion Remitente: <b>${idRemitente} </b></p>
      <p>Direccion Remitente: <b>   ${direccionRemitente} </b></p>
      <p>Departamento Remitente:<b>  ${deptoRemitente}</b> </p>
      <p>Municipio Remitente: <b>  ${municipioRemitente} </b></p>
      <hr>
      <h3>Destinatario</h3>
      <hr>
      <p>Nombre Destinatario:<b> ${nombredestinatario}</b></p>
      <p>Identificacion Destinatario:<b> ${iddestinatario}</b></p>
      <p>Direccion Destinatario: <b>${direccionDestinatario}</b></p>
      <p>Departamento Destinatario:<b> ${deptoDestinatario}</b></p>
      <p>Municipio Destinatario: <b>${municipioDestinatario}</b></p>
      
    </div> `
      
    })



  }

  ngOnInit(): void {
  }

  public invisibleTablas(){
    this.tablas=false;
    
  }

  
   filterdatosMercancias:any='';

   handleSearch(value:string){
    this.filterdatosMercancias=value
   }

 }
