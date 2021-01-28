import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClienteService } from './cliente.service';
import { ClienteComponent } from './cliente.component';

import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers : [
    ClienteService
  ],
  exports : [
    ClienteComponent
  ]
})
export class ClienteModule { }
