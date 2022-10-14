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

  ngOnInit(): void {
  }

}
