import { Component, OnInit } from '@angular/core';
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent implements OnInit {

  datosZonas:any[]=[];

  constructor(public servicioZona:ZonasService,
    public servicioMercancia:MercanciasService) { 

    this.servicioZona.consultarZonas()
      .subscribe(respuesta=>{
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

  ngOnInit(): void {
  }

}
