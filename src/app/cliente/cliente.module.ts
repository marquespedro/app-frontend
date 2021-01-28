import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteService } from './cliente.service';
import { ClienteComponent } from './cliente.component';



@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule
  ],
  providers : [
    ClienteService
  ],
  exports : [
    ClienteComponent
  ]
})
export class ClienteModule { }
