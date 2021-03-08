import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { Endereco } from 'src/app/model/endereco-model';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CadastroEnderecoComponent),
      multi: true
    }
  ]
})
export class CadastroEnderecoComponent implements OnInit, ControlValueAccessor {

  @Input() enderecoForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    cep: new FormControl("", [Validators.required]),
    bairro: new FormControl("", [Validators.required]),
    complemento: new FormControl("", [Validators.required]),
    numero: new FormControl("", [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {}

  public onTouched: () => void = () => { };

  writeValue(obj: any): void {
    obj && this.enderecoForm.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange  disparado')
    this.enderecoForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched disparado')
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.enderecoForm.disable() : this.enderecoForm.enable();
  }



}
