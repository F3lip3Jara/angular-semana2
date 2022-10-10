export class DestinoViaje {
	
    selected  : boolean = false;
    servicios : any[]   =  [];
	
    constructor(public nombre:string, public imagenUrl:string) {}
	
    setSelected(s:boolean){
	  this.selected = s;
	}

	isSelected(){
	  return this.selected;
    }

  servicio(serv : string){
    this.servicios.push(serv);
  }
}