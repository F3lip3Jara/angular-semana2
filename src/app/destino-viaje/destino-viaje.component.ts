import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { VOTE_DOWN, VOTE_UP } from '../models/destinos-viajes-state.model';

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

  constructor(private store: Store<AppState>) {
 
   }

  ngOnInit(): void {
   
    
   
  }

  ir(){
  	
  }

  eliminar(destino : any){   
    this.disparador.emit(destino);   
    return false;
  }

  public voteUp(): boolean{
    this.destino.voteU();
    this.store.dispatch(VOTE_UP({destino: this.destino}));
    return false;
  }

  public voteDown(): boolean{
    this.destino.voteD();
    this.store.dispatch(VOTE_DOWN({destino: this.destino}));
    return false;
  }

}
