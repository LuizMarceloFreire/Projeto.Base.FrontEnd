import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstadioService } from 'src/app/core/services/estadio.service';

@Component({
  selector: 'app-estadio-cadastro',
  templateUrl: './estadios-cadastro.component.html',
  styles: []
})
export class EstadiosCadastroComponent implements OnInit {

  constructor(private estadioService: EstadioService,
              private toast: ToastrService,
              private gerenciadorDeRotas: Router) { }

  public estadio : any;
  formulario: FormGroup;

  ngOnInit() {
    this.criarFormulario();
  }

  private criarFormulario() : void{
    this.estadio = {
      nome: '',
      pais: ''
    };

    this.formulario = new FormGroup({
      nome: new FormControl(this.estadio.nome),
      pais: new FormControl(this.estadio.pais)
    });

    this.formulario.patchValue(this.estadio);
  }

  Salvar(){
    this.estadio = this.formulario.value;
    this.estadioService.cadastrarEstadio(this.estadio).subscribe(res =>{
      this.gerenciadorDeRotas.navigate(['/estadios']).then(() =>{
        this.toast.success("Salvo com sucesso!");
      });
    });
  }
}
