
import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './destino-viaje.model';
import { Store } from '@ngrx/store';
import { ELEGIDO_FAVORITO, NUEVO_DESTINO } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';
import { AppState } from '../app.module';

@Injectable()

export class DestinosApiClient {

	destinos:DestinoViaje[];
	
	constructor(public store: Store<AppState>) {
       this.destinos = [];
	}

	add(d:DestinoViaje){
	  this.store.dispatch(NUEVO_DESTINO({destino: d}));
	  this.destinos.push(d);
	}

	getAll():DestinoViaje[]{
	  return this.destinos;
    }

	getById(id:String):DestinoViaje{
	  return this.destinos.filter(function(d){return d.id.toString() == id;})[0];
    }

	elegir(d:DestinoViaje){	
		this.destinos.forEach(function (x) {x.setSelected(false); });
		d.setSelected(true);
		this.store.dispatch(ELEGIDO_FAVORITO({ destino:d}));
	}
    
	/*
		subscribeonChange(fn:any){
		this.current.subscribe(fn);
	}
	*/
}