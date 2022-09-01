import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clube } from 'src/app/core/model/clube';
import { ClubeService } from 'src/app/core/services/clube.service';

@Component({
  selector: 'app-clube-editar',
  templateUrl: './clube-editar.component.html',
  styles: []
})
export class ClubeEditarComponent implements OnInit {

  constructor(private clubeService: ClubeService,
              private activeRoute: ActivatedRoute,
              private toast: ToastrService,
              private gerenciadorDeRotas: Router) { }

              
  public clube: Clube;
  private clubeId: any;
  formulario: FormGroup;
  situacaoClube: boolean = false;
  situacaoLabel: string;
  
  ngOnInit() {
    this.criarFormulario();
    this.clubeId = this.activeRoute.snapshot.paramMap.get("id");

    if(this.clubeId){
      this.buscarClubePorId();
    }
  }

  buscarClubePorId(){
    this.clubeService.buscarClubePorId(this.clubeId)
    .subscribe(
      res => {
        this.formulario.patchValue(res);
        this.situacaoClube = res.ativo;
        this.situacaoLabel = res.ativo ? "Ativo" : "Inativo";
      },
      error => console.log(error)
    );
  }

  private criarFormulario(){
    this.formulario = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null),
      anoFundacao: new FormControl(null),
      urlRedeSocial: new FormControl(null),
      empresaId: new FormControl(null),
      ativo: new FormControl(true)
    });
  }

  Salvar(){
    this.clube = this.formulario.value;
    this.clubeService.editarClube(this.clube).subscribe(res =>{
      this.gerenciadorDeRotas.navigate(['clubes']).then(() =>{
        this.toast.success("Deletado com sucesso!");
      });
    }, 
    error => console.log(error));
  }
}
