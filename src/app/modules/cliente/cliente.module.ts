import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteService } from './cliente.service';

import { EnderecoModule } from '../endereco/endereco.module';

import {InputTextModule} from 'primeng/inputtext';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';


@NgModule({
  declarations: [
    CadastroClienteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ClienteRoutingModule,
    EnderecoModule,
    FormsModule
  ],
  providers : [
    ClienteService
  ],
  exports : []
})
export class ClienteModule { }
