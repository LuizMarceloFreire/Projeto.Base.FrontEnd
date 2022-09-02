import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estadio } from 'src/app/core/model/estadio';
import { EstadioService } from 'src/app/core/services/estadio.service';

@Component({
  selector: 'app-estadio-editar',
  templateUrl: './estadios-editar.component.html',
  styles: []
})
export class EstadiosEditarComponent implements OnInit {

  constructor(private estadioService: EstadioService,
              private activeRoute: ActivatedRoute,
              private toast: ToastrService,
              private gerenciadorDeRotas: Router) { }

  public estadio: Estadio;
  private estadioId: any;
  formulario: FormGroup;
  situacaoEstadio: boolean = false;
  situacaoLabel: string;

  ngOnInit() {
    this.criarFormulario();
    this.estadioId = this.activeRoute.snapshot.paramMap.get("id");

    if(this.estadioId){
      this.buscarEstadioPorId();
    }
  }

  buscarEstadioPorId(){
    this.estadioService.buscarEstadioPorId(this.estadioId)
    .subscribe(
      res => {
        this.formulario.patchValue(res);
        this.situacaoEstadio = res.ativo;
        this.situacaoLabel = res.ativo ? "Ativo" : "Inativo";
      },
      error => console.log(error)
    );
  }

  private criarFormulario(){
    this.formulario = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null),
      pais: new FormControl(null),
      ativo: new FormControl(true)
    });
  }

  Salvar(){
    this.estadio = this.formulario.value;
    this.estadioService.editarEstadio(this.estadio).subscribe(res =>{
      this.gerenciadorDeRotas.navigate(['estadios']).then(() =>{
      });
    }, 
    error => console.log(error));
  }
}
