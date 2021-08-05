import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private ApiURL: string= "https://restcountries.eu/rest/v2";

  get httpparams(){
    return new HttpParams()
    .set('fields','name;capital;alpha2Code;flag;population');
  }
  constructor(private htpp : HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.ApiURL}/name/${termino}`;
   return this.htpp.get<Country[]>(url);
  }

  buscarPaisPorCapital(termino: string): Observable<Country[]>{

    const url = `${this.ApiURL}/capital/${termino}`;
   return this.htpp.get<Country[]>(url);
  }
  buscarPaisPorRegion(termino: string): Observable<Country[]>{

    const url = `${this.ApiURL}/region/${termino}`;
   return this.htpp.get<Country[]>(url, {params: this.httpparams});
  }
  buscarPaisPorCodigo(termino: string): Observable<Country>{

    const url = `${this.ApiURL}/alpha/${termino}`;
   return this.htpp.get<Country>(url);
  }

}
