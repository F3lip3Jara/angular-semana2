import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.models';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {

  @Input() destino : DestinoViaje = new DestinoViaje ('','');
  @Input() position: number  = 0;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() disparador :EventEmitter<any> = new EventEmitter();

  constructor() {
 
   }

  ngOnInit(): void {
   
    
   
  }

  ir(){
  	
  }

  eliminar(destino : any){   
    this.disparador.emit(destino);   
    return false;
  }

}
