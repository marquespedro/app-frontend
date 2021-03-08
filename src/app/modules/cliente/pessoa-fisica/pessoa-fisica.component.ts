import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PessoaFisicaComponent),
      multi: true
    }
  ]
})
export class PessoaFisicaComponent implements OnInit, ControlValueAccessor {


  @Input() pessoaFisicaForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    cpf: new FormControl("", [Validators.required, Validators.minLength(11)]),
    nome: new FormControl("", [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => { };

  writeValue(obj: any): void {
    obj && this.pessoaFisicaForm.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange  disparado')
    this.pessoaFisicaForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched disparado')
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.pessoaFisicaForm.disable() : this.pessoaFisicaForm.enable();
  }

}
