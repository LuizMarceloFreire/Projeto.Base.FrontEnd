import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estadio } from '../model/estadio';

@Injectable({
  providedIn: 'root'
})
export class EstadioService {

  constructor(protected http: HttpClient) { }

  buscarTodosEstadios() : Observable<Estadio[]>{
    return this.http.get<Estadio[]>(environment.apiUrl + 'Estadio/buscar-estadios');
  }

  cadastrarEstadio(estadio: any){
    return this.http.post(environment.apiUrl + 'Estadio/cadastrar-estadio', estadio);
  }

  editarEstadio(estadio : any){
    return this.http.put(environment.apiUrl + 'Estadio/editar-estadio', estadio);
  }

  buscarEstadioPorId(id: number) : Observable<Estadio>{
    return this.http.get<Estadio>(environment.apiUrl + `Estadio/buscar-estadio-por-id/${id}`);
  }

  deletarEstadio(id: number){
    return this.http.delete(environment.apiUrl + `Estadio/deletar-estadio/${id}`);
  }
}
