import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  bandera:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTexto():void{
   
    
    
    this.bandera=true

    console.log(this.bandera);
    console.log("camniando");


  }

  retirartexto():void{
    this.bandera=false
  }





}
