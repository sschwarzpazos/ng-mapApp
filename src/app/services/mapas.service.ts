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

}
