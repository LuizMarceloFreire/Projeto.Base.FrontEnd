import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClubeService } from 'src/app/core/services/clube.service';

@Component({
  selector: 'app-clube-deletar',
  templateUrl: './clube-deletar.component.html',
  styles: []
})
export class ClubeDeletarComponent implements OnInit {

  constructor(private clubeService: ClubeService,
              private activeRoute: ActivatedRoute,
              private toast: ToastrService,
              private gerenciadorDeRotas: Router) { }

  private clubeId: any;

  ngOnInit() {
    this.clubeId = this.activeRoute.snapshot.paramMap.get("id");

    if(this.clubeId){
      this.deletarClube();
    }
  }

  deletarClube(){
    this.clubeService.deletarClube(this.clubeId).subscribe(res => {
      this.gerenciadorDeRotas.navigate(['clubes']).then(() =>{
        this.toast.success("Deletado com sucesso!");
      });
    },
    error =>{
      console.log(error);
    });
  }
}
