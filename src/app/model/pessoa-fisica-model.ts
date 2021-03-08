import { Endereco } from "./endereco-model";

export class PessoaFisica {
    id!: number | null;
    nome?: string;
    cpf?: string;
    endereco?: Endereco;
}