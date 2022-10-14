import { Component, OnInit } from '@angular/core';
import {Output} from '@angular/core'
import {EventEmitter} from '@angular/core'
import { FormControl } from '@angular/forms';
import { outputAst } from '@angular/compiler';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-barrabusqueda',
  templateUrl: './barrabusqueda.component.html',
  styleUrls: ['./barrabusqueda.component.css']
})
export class BarrabusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.searchEmitter.emit(value)})
  }

  search = new FormControl

  @Output('search') searchEmitter = new EventEmitter<string>();
}
