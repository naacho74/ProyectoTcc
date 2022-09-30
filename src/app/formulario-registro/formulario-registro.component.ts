import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

formulario!:FormGroup;

  constructor(public fabricaDiccionario:FormBuilder) {

   }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()

  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['luis',[Validators.required,Validators.minLength(6)]],
      tiporemitente:['',[Validators.required,Validators.minLength(6)]],
      idremitente:['',[Validators.required,Validators.minLength(6)]],
      nombreremitente:['',[Validators.required,Validators.minLength(6)]],
      departamentoremitente:['',[Validators.required,Validators.minLength(6)]],
      municipioremitente:['',[Validators.required,Validators.minLength(6)]],
      direccionremitente:['',[Validators.required,Validators.minLength(6)]],
      tipodestinatario:['',[Validators.required,Validators.minLength(6)]],
      iddestinatario:['',[Validators.required,Validators.minLength(6)]],
      nombredestinatario:['',[Validators.required,Validators.minLength(6)]],
      departamentodestinatario:['',[Validators.required,Validators.minLength(6)]],
      municipiodestinatario:['',[Validators.required,Validators.minLength(6)]],
      direcciondestinatario:['',[Validators.required,Validators.minLength(6)]]
    })

  }

  

}
