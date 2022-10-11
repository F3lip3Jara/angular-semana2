

export class DestinoViaje{
     selected:boolean = false;
     servicios : string[];
     id = 1;
     votes = 0;
     
    constructor(public n: string ,public  u: string){ 
        this.servicios=['Comida','Desayuno'];
    }
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s:boolean) : any {
        this.selected = s;
    }
    voteU(): any {
        this.votes++;
      }
    voteD(): any {
    this.votes--;
    }
    voteR(): any {
        this.votes=0;
    }
}