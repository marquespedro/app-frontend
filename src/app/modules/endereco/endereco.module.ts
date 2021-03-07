import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { CadastroEnderecoComponent } from './cadastro-endereco/cadastro-endereco.component';


@NgModule({
  declarations: [
    CadastroEnderecoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  providers: [

  ],
  exports: [CadastroEnderecoComponent]
})
export class EnderecoModule { }
