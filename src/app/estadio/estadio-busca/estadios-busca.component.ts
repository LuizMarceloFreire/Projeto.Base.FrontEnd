import { EstadioService } from './../../core/services/estadio.service';
import { Component, OnInit } from '@angular/core';
import { Estadio } from 'src/app/core/model/estadio';

@Component({
  selector: 'app-estadios-busca',
  templateUrl: './estadios-busca.component.html',
  styles: []
})
export class EstadiosBuscaComponent implements OnInit {

  constructor(private estadioService: EstadioService) { }

  public estadios: Estadio[] = [];

  ngOnInit() {
    this.buscarEstadios();
  }

  buscarEstadios(){
    this.estadioService.buscarTodosEstadios()
    .subscribe(
      res => {
        this.estadios = res;
      },
      error => console.log(error)
    );
  }
}
