import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  bandera1:boolean=false
  bandera2:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTexto1():void{
   
    
    
    this.bandera1=true

    console.log(this.bandera1);
    console.log("camniando");


  }

  retirartexto1():void{
    this.bandera1=false
  }

  cambiarTexto2():void{
   
    
    
    this.bandera2=true

    console.log(this.bandera2);
    console.log("camniando");


  }

  retirartexto2():void{
    this.bandera2=false
  }





}


