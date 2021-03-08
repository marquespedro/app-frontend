import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente-model';
import { Endereco } from 'src/app/model/endereco-model';
import { PessoaFisica } from 'src/app/model/pessoa-fisica-model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {


  cliente: Cliente = new Cliente();

  clienteForm: FormGroup = this.configurarFormCliente();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
  }


  configurarFormCliente() {
    return this.clienteForm = this.formBuilder.group({
      id: [null,''],
      pessoaFisica: ['', [Validators.required, Validators.minLength(3)]],
      endereco: [, []]
    });
  }

  submitFormCliente() {

 
    this.clienteService.salvar(this.clienteForm.value).subscribe(response => {
      alert('cliente salvo com sucesso');
    });
  }

  get getCpf() {
    return this.clienteForm.get('cpf');
  }

  get getNome() {
    return this.clienteForm.get('nome');
  }

}
