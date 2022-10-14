import { Component, OnInit } from '@angular/core';
import {Color, ScaleType, LegendPosition} from '@swimlane/ngx-charts'
import { ZonasService } from '../services/zonas.service';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent{
  view: [number,number] = [500, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: LegendPosition=LegendPosition.Below;

  colorScheme : Color= {
    name:'colorestcc',
    selectable:true,
    group: ScaleType.Ordinal,
    domain: ['#A93226 ', '#F4D03F', '#AAB7B8', '#212F3D'],
  };

  disponibilidades:any[]=[]

  constructor(public servicioZonas:ZonasService) {

    this.servicioZonas.consultarZonas()
      .subscribe(respuesta=>{
        this.disponibilidades=respuesta.map((zona:any)=>{
          return {
            name:zona.nombre,
            value:zona.disponible
          }
        })
      })
  }

  get single(){
    return this.disponibilidades
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
