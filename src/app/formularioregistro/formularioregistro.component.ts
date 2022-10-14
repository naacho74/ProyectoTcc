import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  controlDeZona:boolean=true;

  datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicioMercancias:MercanciasService,
    public servicioZonas:ZonasService
    ){ }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
    this.servicioZonas.consultarZonas()
    .subscribe(respuesta=>{
      
      this.datosZonas=respuesta.map((zona:any)=>{
        return {nombre:zona.nombre,id:zona.id}
      })

    })
    console.log(this.datosZonas)

  }

  public analizarFormulario():void{

    let datosMercancia=this.formulario.value
    datosMercancia.volumen=this.formulario.value.volumen
    datosMercancia.nombre=this.formulario.value.nombre
    datosMercancia.iup=this.formulario.value.iup
    datosMercancia.tipoRemitente=this.formulario.value.tiporemitente
    datosMercancia.tipoDestinatario=this.formulario.value.tipodestinatario
    datosMercancia.idRemitente=this.formulario.value.idremitente
    datosMercancia.idDestinatario=this.formulario.value.iddestinatario
    datosMercancia.nombreRemitente=this.formulario.value.nombreremitente
    datosMercancia.nombreDestinatario=this.formulario.value.nombredestinatario
    datosMercancia.deptoRemitente=this.formulario.value.deptoremitente
    datosMercancia.deptoDestinatario=this.formulario.value.deptodestinatario
    datosMercancia.municipioRemitente=this.formulario.value.municipioremitente
    datosMercancia.municipioDestinatario=this.formulario.value.municipiodestinatario
    datosMercancia.direccionRemitente=this.formulario.value.direccionremitente
    datosMercancia.direccionDestinatario=this.formulario.value.direcciondestinatario
    datosMercancia.zona={id:this.formulario.value.zona}

    this.servicioMercancias.ingresarMercancia(datosMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    
    })
    
   
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['',[Validators.required,Validators.pattern('/^[1-9]\d{6,10}$/')]],
      nombre:['',[Validators.required]],
      volumen:['',[Validators.required]],
      tiporemitente:['',[Validators.required]],
      idremitente:['',[Validators.required]],
      nombreremitente:['',[Validators.required]],
      deptoremitente:['',[Validators.required]],
      municipioremitente:['',[Validators.required]],
      direccionremitente:['',[Validators.required]],
      tipodestinatario:['',[Validators.required]],
      iddestinatario:['',[Validators.required]],
      nombredestinatario:['',[Validators.required]],
      deptodestinatario:['',[Validators.required]],
      municipiodestinatario:['',[Validators.required]],
      direcciondestinatario:['',[Validators.required]],
      zona:['',[Validators.required]],
    })
  }

  public buscarMercancia(){
    console.log(this.datosZonas);
    let iup=this.formulario.value.iup
    this.servicioMercancias.buscarMercanciaPorId(iup)
    .subscribe(

      respuesta=>{

       this.formulario.patchValue({

        tiporemitente:respuesta.tipoRemitente,
        idremitente:respuesta.idRemitente,
        nombreremitente:respuesta.nombreRemitente,
        deptoremitente:respuesta.deptoRemitente,
        municipioremitente:respuesta.municipioRemitente,
        direccionremitente:respuesta.direccionRemitente,

        tipodestinatario:respuesta.tipoDestinatario,
        iddestinatario:respuesta.idDestinatario,
        nombredestinatario:respuesta.nombreDestinatario,
        deptodestinatario:respuesta.deptoDestinatario,
        municipiodestinatario:respuesta.municipioDestinatario,
        direcciondestinatario:respuesta.direccionDestinatario,
       })
       this.controlDeZona=false
       this.formulario.disable()
       this.formulario.controls['iup'].enable()

      },
      error=>{
        console.log(error.error)
        this.formulario.enable()
        this.controlDeZona=true

      }


    )

  }

}
