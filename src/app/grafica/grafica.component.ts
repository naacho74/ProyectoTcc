import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {Color,ScaleType,LegendPosition} from '@swimlane/ngx-charts'
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {

 
  
  view: [number,number] = [500, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  legenPosition:LegendPosition=LegendPosition.Below

  colorScheme:Color= {
    name:'coloresTcc',
    selectable:true,
    group:ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  disponibilidades:any[]=[]

  constructor(public servicioZonas:ZonasService) {
    this.servicioZonas.consultarZona()
    .subscribe(respuesta=>{
    this.disponibilidades=respuesta.map((zona:any)=>{
        return{name:zona.nombre,
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