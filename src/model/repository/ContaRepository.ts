import { Conta } from "../conta";

export interface ContaRepository{
    procurarPorNumero (numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(conta: number): void;

    sacar(numero: number, valor: number): void
    depositar(numero: number, valor: number): void
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void

}