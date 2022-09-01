import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstadioService } from 'src/app/core/services/estadio.service';

@Component({
  selector: 'app-estadio-deletar',
  templateUrl: './estadios-deletar.component.html',
  styles: []
})
export class EstadiosDeletarComponent implements OnInit {

  constructor(private estadioService: EstadioService,
              private activeRoute: ActivatedRoute,
              private toast: ToastrService,
              private gerenciadorDeRotas: Router) { }

  private estadioId: any;

  ngOnInit() {
    this.estadioId = this.activeRoute.snapshot.paramMap.get("id");

    if(this.estadioId){
      this.deletarEstadio();
    }
  }

  deletarEstadio(){
    this.estadioService.deletarEstadio(this.estadioId).subscribe(res => {
      this.gerenciadorDeRotas.navigate(['estadios']).then(() =>{
        this.toast.success("Deletado com sucesso!");
      });
    },
    error =>{
      console.log(error);
    });
  }
}
