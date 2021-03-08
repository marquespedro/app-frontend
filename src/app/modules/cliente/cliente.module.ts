import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteService } from './cliente.service';

import { EnderecoModule } from '../endereco/endereco.module';

import {InputTextModule} from 'primeng/inputtext';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ButtonModule } from 'primeng/button';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';



@NgModule({
  declarations: [
    CadastroClienteComponent,
    PessoaFisicaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ClienteRoutingModule,
    EnderecoModule,
    FormsModule,
    HttpClientModule

  ],
  providers : [
    ClienteService
  ],
  exports : []
})
export class ClienteModule { }
