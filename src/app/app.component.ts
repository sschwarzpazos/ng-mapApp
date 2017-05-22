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

  marcadorSel:any = null;
  draggable:string = '1';

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
    this.marcadorSel = marcador;
  }

  dragEndMarcador( marcador: Marcador, evento ) {
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();
  }

  eliminarMarcador( indice: number ) {
    this._ms.eliminarMarcador( indice );
  }

  cambiarDraggable() {
    this.marcadorSel.draggable = (this.draggable === "1") ? true : false;  
  }
}
