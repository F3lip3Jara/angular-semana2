import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestinoViaje } from '../models/destino-viaje.models';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViaje[];

  destino: FormGroup;

 // @Output() onItemAdded: EventEmitter<DestinoViaje>;



  constructor(private fb : FormBuilder) {
  	this.destinos = [];
   
   // this.onItemAdded = new EventEmitter();

    this.destino = fb.group({
      nombre: ['', Validators.compose([
        Validators.required
      ])],
      url: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  ngOnInit() {
  }

  guardar(nombre:string, url:string):boolean {
  	//this.destinos.push(new DestinoViaje(nombre, url));
  	let d = new DestinoViaje(nombre, url);
    this.destinos.push(d);
   // this.onItemAdded.emit(d);
    console.log(this.destinos);
    return false;
  }

  elegido(e:DestinoViaje) {
    this.destinos.forEach(x => x.setSelected(false));
    e.setSelected(true);
  }

  eliminar(e:any){    
    this.destinos.splice(e,1);
    
     
  }

}
