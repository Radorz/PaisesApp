import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent   {

  
  items : Country[]= [];
  termino : string = "";
  error : boolean = false;
  showTable : boolean = false;

  constructor( private service : PaisService) { }

Buscar( termino: string){

  this.termino = termino;
  this.error= false;
  console.log(this.termino)

  this.service.buscarPaisPorCapital(this.termino).subscribe((res)=>{
    console.log(res)
    this.items =(res);
    if(this.items.length>0){
      this.showTable=true;
    }else{
      this.showTable=false;
    }
  }
    ,
    (err)=>{

      this.error= true;
      this.items =[];
    });
}
sugerencias( termino: string ){

  this.error=false;

}

}



