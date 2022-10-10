import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { HomeComponent } from '../home/home.component';
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

formulario!:FormGroup;
controlIdZona:Boolean=true;
datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicioMercancias:MercanciasService,
    public servicioZonas:ZonasService
    ) {} 

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
    this.servicioZonas.consultarZona()
    .subscribe(respuesta=>{

      this.datosZonas=respuesta.map((zona:any)=>{
        return {nombre:zona.nombre}
      })
    })
   
  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }
  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['',[Validators.required,]],
      tiporemitente:['',[Validators.required]],
      idremitente:['',[Validators.required]],
      nombreremitente:['',[Validators.required]],
      departamentoremitente:['',[Validators.required]],
      municipioremitente:['',[Validators.required]],
      direccionremitente:['',[Validators.required]],
      tipodestinatario:['',[Validators.required]],
      iddestinatario:['',[Validators.required]],
      nombredestinatario:['',[Validators.required]],
      departamentodestinatario:['',[Validators.required]],
      municipiodestinatario:['',[Validators.required]],
      direcciondestinatario:['',[Validators.required]]
    })


  }

  public buscarMercancia(){
    let iup=this.formulario.value.iup
    this.servicioMercancias.buscarMercanciaPorId(iup)
    .subscribe(
      
      respuesta=>{
       
      this.formulario.patchValue({
        tiporemitente:respuesta.tipoRemitente,
       idremitente:respuesta.idRemitente,
        nombreremitente:respuesta.nombreRemitente,
        departamentoremitente:respuesta.departamentoRemitente,
        municipioremitente:respuesta.municipioRemitente,
        direccionremitente:respuesta.direccionRemitente,
        tipodestinatario:respuesta.tipoDestinatario,
        iddestinatario:respuesta.idDestinatario,
        nombredestinatario:respuesta.nombreDestinatario,
        departamentodestinatario:respuesta.departamentoDestinatario,
        municipiodestinatario:respuesta.municipioDestinatario,
        direcciondestinatario:respuesta.direccionDestinatario

      })
      this.formulario.disable();
      this.formulario.controls['iup'].enable()
      this.controlIdZona=false
      
      },
       error=>{console.log(error.error)
       this.formulario.reset() 
      this.formulario.enable()
      this.controlIdZona=true
      
      } )
  }
  

}
