import { Conta } from "./conta-model";
import { PessoaFisica } from "./pessoa-fisica-model";

export class Cliente {
    id!: number | null;
    contas!: Conta[] | null;
    pessoaFisica!: PessoaFisica | null;
}