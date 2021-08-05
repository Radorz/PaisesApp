import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent  {

  items : Country[]= [];
  termino : string = "";
  error : boolean = false;
  showTable : boolean = false;
  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva: string = '';
  constructor( private service : PaisService) {
    
   }

   activarRegion(region: string){

    this.regionActiva= region;
    //Hacer el llamado
  }

  getclassCSS(region: string){

    return (region=== this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'

  }

Buscar( termino: string){
  
  this.termino = termino;
  this.error= false;
  console.log(this.termino)
  console.log(this.regionActiva);
  this.service.buscarPaisPorRegion(this.termino).subscribe((res)=>{
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
