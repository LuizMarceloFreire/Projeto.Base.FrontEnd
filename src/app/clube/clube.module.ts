import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubeEditarComponent } from './clube-editar/clube-editar.component';
import { ClubeDeletarComponent } from './clube-deletar/clube-deletar.component';
import { ClubeBuscaComponent } from './clube-busca/clube-busca.component';
import { ClubeCadastroComponent } from './clube-cadastro/clube-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClubesRoutingModule } from './clube.routing';



@NgModule({
  declarations: [
    ClubeCadastroComponent,
    ClubeBuscaComponent,
    ClubeDeletarComponent,
    ClubeEditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClubesRoutingModule
  ],
  exports: [
    ClubeCadastroComponent,
    ClubeBuscaComponent,
    ClubeDeletarComponent,
    ClubeEditarComponent
  ]
})
export class ClubeModule { }
