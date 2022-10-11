import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {

  destino: FormGroup;
  destinos: DestinoViaje[] = [];
  searchResults: any;

  @Output() onItemAdded: EventEmitter<any>  =  new EventEmitter();;

  constructor(private fb : FormBuilder) { 
    
    this.destino = fb.group({
      nombre: ['', Validators.compose([
        Validators.required
      ])],
      url: ['', Validators.compose([
        Validators.required
      ])],
    });

  }


  guardar(nombre:string, url:string):boolean {
  	//this.destinos.push(new DestinoViaje(nombre, url));
  	let d = new DestinoViaje(nombre, url);
    this.destinos.push(d);
    this.onItemAdded.emit(this.destinos);
    return false;
  }



  ngOnInit(): void {
    this.destino.controls['nombre'].valueChanges.pipe(   
      filter(text => text.length >= 2),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(()=> ajax('/assets/datos.json'))
    ).subscribe( ajaxResponse   =>{
      console.log(  ajaxResponse.response);
      this.searchResults  = ajaxResponse.response;

    });
    


  }

}
