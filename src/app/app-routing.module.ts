import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'clientes', loadChildren: () => import('./modules/cliente/cliente.module').then(m => m.ClienteModule) },
  { path: '', redirectTo: 'clientes/cadastrar', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
