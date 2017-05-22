import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {
  marcadores:Marcador[] = [];

  constructor() {
    let nuevoMarcador:Marcador = {
      lat: 42.880585,
      lng: -8.544609,
      draggable: true,
      titulo: 'Catedral de Santiago de Compostela'
    };

    this.marcadores.push( nuevoMarcador );

  }

  insertarMarcador( nuevoMarcador:Marcador ) {
    this.marcadores.push( nuevoMarcador );
  }

  guardarMarcadores() {
    localStorage.setItem( 'marcadores', JSON.stringify( this.marcadores ) );
  }

  cargarMarcadores() {
    if ( localStorage.getItem( 'marcadores' ) ) {
      this.marcadores = JSON.parse( localStorage.getItem( 'marcadores' ) );
    } else {
      this.marcadores = [];
    }
  }

}
