import { Conta } from "./conta-model";
import { PessoaFisica } from "./pessoa-fisica-model";

export class Cliente {
    private id!: number;
    private contas?: Conta[];
    private pessoaFisica?: PessoaFisica;
}