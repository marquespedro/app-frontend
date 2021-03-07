import { Endereco } from "./endereco-model";

export class PessoaFisica {

    constructor(private id?: number,
                private nome?: string,
                private cpf?: string,
                private endereco?: Endereco) {

    }
}