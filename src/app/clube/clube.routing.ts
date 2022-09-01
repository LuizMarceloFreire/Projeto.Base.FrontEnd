import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubeBuscaComponent } from './clube-busca/clube-busca.component';
import { ClubeCadastroComponent } from './clube-cadastro/clube-cadastro.component';
import { ClubeDeletarComponent } from './clube-deletar/clube-deletar.component';
import { ClubeEditarComponent } from './clube-editar/clube-editar.component';

const rotasDeClube: Routes = [
  { path: 'clubes', component: ClubeBuscaComponent},
  { path: 'clube-novo', component: ClubeCadastroComponent},
  { path: 'editar-clube/:id', component: ClubeEditarComponent},
  { path: 'deletar-clube/:id', component: ClubeDeletarComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(rotasDeClube),
    CommonModule 
  ],
  exports: [
    RouterModule
  ]
})

export class ClubesRoutingModule { }
