import { CommonModule } from '@angular/common';
import { EstadiosEditarComponent } from './estadio-editar/estadios-editar.component';
import { EstadiosDeletarComponent } from './estadio-deletar/estadios-deletar.component';
import { EstadiosBuscaComponent } from './estadio-busca/estadios-busca.component';
import { NgModule } from '@angular/core';
import { EstadiosCadastroComponent } from './estadio-cadastro/estadios-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadiosRoutingModule } from './estadio.routing';

@NgModule({
  declarations: [
    EstadiosCadastroComponent,
    EstadiosBuscaComponent,
    EstadiosDeletarComponent,
    EstadiosEditarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    EstadiosRoutingModule,
    CommonModule
  ],
  exports:[
    EstadiosCadastroComponent,
    EstadiosBuscaComponent,
    EstadiosDeletarComponent,
    EstadiosEditarComponent
  ]
})
export class EstadioModule { }
