import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clube } from '../model/clube';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  constructor(protected http: HttpClient) { }

  buscarTodosClubes() : Observable<Clube[]>{
    return this.http.get<Clube[]>(environment.apiUrl + 'Clube/buscar-clubes');
  }

  cadastrarClube(clube: any){
    return this.http.post(environment.apiUrl + 'Clube/cadastrar-clube', clube);
  }

  editarClube(clube : any){
    return this.http.put(environment.apiUrl + 'Clube/editar-clube', clube);
  }

  buscarClubePorId(id: number) : Observable<Clube>{
    return this.http.get<Clube>(environment.apiUrl + `Clube/buscar-clube-por-id/${id}`);
  }

  deletarClube(id: number){
    return this.http.delete(environment.apiUrl + `Clube/deletar-clube/${id}`);
  }
}
