import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat/chat.component';


const routes: Routes = [
  { path: 'clientes', loadChildren: () => import('./modules/cliente/cliente.module').then(m => m.ClienteModule) },
  { path: '', redirectTo: 'clientes/cadastrar', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
