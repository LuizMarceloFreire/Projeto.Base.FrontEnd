import { EstadiosDeletarComponent } from './estadio-deletar/estadios-deletar.component';
import { CommonModule } from '@angular/common';
import { EstadiosEditarComponent } from './estadio-editar/estadios-editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadiosBuscaComponent } from './estadio-busca/estadios-busca.component';
import { EstadiosCadastroComponent } from './estadio-cadastro/estadios-cadastro.component';

const rotasDeEstadio: Routes = [
  { path: 'estadios', component: EstadiosBuscaComponent},
  { path: 'estadio-novo', component: EstadiosCadastroComponent},
  { path: 'editar-estadio/:id', component: EstadiosEditarComponent},
  { path: 'deletar-estadio/:id', component: EstadiosDeletarComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(rotasDeEstadio),
    CommonModule 
  ],
  exports: [
    RouterModule
  ]
})

export class EstadiosRoutingModule { }
