import { Component, OnInit } from '@angular/core';
import { Clube } from 'src/app/core/model/clube';
import { ClubeService } from 'src/app/core/services/clube.service';

@Component({
  selector: 'app-clube-busca',
  templateUrl: './clube-busca.component.html',
  styles: []
})
export class ClubeBuscaComponent implements OnInit {

  constructor(private clubeService: ClubeService) { }
  public clubes: Clube[] = [];

  ngOnInit() {
    this.buscarClubes();
  }

  buscarClubes(){
    this.clubeService.buscarTodosClubes()
    .subscribe(
      res => {
        this.clubes = res;
      },
      error => console.log(error)
    );
  }
}
