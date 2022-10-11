import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../app.module';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos : any[] = [];
  //@Output() disparador : EventEmitter<DestinoViaje> ;

  constructor() {


  }

  ngOnInit() {
  }

  
  destinosViaje(d:any){
   // this.destinosApiClient.add(d);
    //this.onItemAdded.emit(d);    
  } 
  

 eliminar(e:any){    
    this.destinos.splice(e,1); 
     
 }

}
