import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 42.880585;
  lng: number = -8.544609;
  zoom: number = 16;

  constructor( private _ms:MapasService ) {
    this._ms.cargarMarcadores();
  }

  clickMapa( evento) {
    let nuevoMarcador:Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin título',
      draggable: true
    };

    this._ms.insertarMarcador( nuevoMarcador );
    this._ms.guardarMarcadores();
  }

  clickMarcador( marcador: Marcador, indice:number ) {

  }
}
