import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/model/endereco-model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  enderecoCliente: Endereco = new Endereco();

  clienteForm: FormGroup = this.configurarFormCliente();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
  }


  configurarFormCliente() {
    return this.clienteForm = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      endereco: [, []]
    });
  }

  submitFormCliente() {
    console.log('formulario : ', this.clienteForm.value);
    this.clienteService.salvar(this.clienteForm.value).subscribe(response => {
      alert('cliente salvo com sucesso');
    });
  }
}
