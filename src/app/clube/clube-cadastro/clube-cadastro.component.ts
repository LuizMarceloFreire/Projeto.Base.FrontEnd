import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClubeService } from 'src/app/core/services/clube.service';

@Component({
  selector: 'app-clube-cadastro',
  templateUrl: './clube-cadastro.component.html',
  styles: []
})
export class ClubeCadastroComponent implements OnInit {

  constructor(private clubeService: ClubeService,
              private toast: ToastrService,
              private gerenciadorDeRotas: Router) { }

  public clube : any;
  formulario: FormGroup;

  ngOnInit() {
    this.criarFormulario();
  }

  private criarFormulario() : void{
    this.clube = {
      nome: '',
      anoFundacao: null,
      urlRedeSocial: '',
      estadioId: null
    };

    this.formulario = new FormGroup({
      nome: new FormControl(this.clube.nome),
      anoFundacao: new FormControl(this.clube.anoFundacao),
      urlRedeSocial: new FormControl(this.clube.urlRedeSocial),
      estadioId: new FormControl(this.clube.estadioId)
    });

    this.formulario.patchValue(this.clube);
  }

  Salvar(){
    this.clube = this.formulario.value;
    this.clubeService.cadastrarClube(this.clube).subscribe(res =>{
      this.gerenciadorDeRotas.navigate(['/estadios']).then(() =>{
        this.toast.success("Salvo com sucesso!");
      });
    });
  }
}
