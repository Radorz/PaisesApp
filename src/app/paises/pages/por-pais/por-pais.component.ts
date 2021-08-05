import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  items : Country[]= [];
  termino : string = "";
  error : boolean = false;
  showTable : boolean = false;
  itemsSugeridos : Country[]= [];
  showsug : boolean = false;
  constructor( private service : PaisService) { }

Buscar( termino: string){

  this.termino = termino;
  this.error= false;
  console.log(this.termino)

  this.service.buscarPais(this.termino).subscribe((res)=>{
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
  this.termino = termino;

  this.service.buscarPais(termino)
  .subscribe(paises=>this.itemsSugeridos= paises.splice(0,5),
  (err)=> this.itemsSugeridos=[] );

}

// buscarSugerido(termino: string){

//   this.Buscar(termino);
//   this.showsug=false;

// }
}
