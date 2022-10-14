import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(lista: any[],texto: string): any[] {

  if(!texto)return lista
  return lista.filter(user=> user.nombre.toUpperCase().includes(texto.toUpperCase()))

  }

}
