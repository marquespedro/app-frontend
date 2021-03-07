import { Conta } from "./conta-model";
import { PessoaFisica } from "./pessoa-fisica-model";

export class Cliente {

    constructor(private id?: number,
        private contas?: Conta[],
        private pessoaFisica?: PessoaFisica) {
    }
}