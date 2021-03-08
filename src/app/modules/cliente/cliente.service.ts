import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Cliente } from 'src/app/model/cliente-model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpCliente: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpCliente.post<Cliente>(`${environment.urlBackend}/cliente`, cliente, httpOptions);
  }

}
