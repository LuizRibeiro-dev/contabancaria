import readlinesync = require("readline-sync");
import {colors} from './src/util/colors';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaController } from "./src/Controller/Controller";
import { ContaPoupanca } from "./src/model/ContaPoupança";
export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ["Conta Corrente","Conta Poupanca"]

    const contas: ContaController = new ContaController();

    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

    while (true) {

        console.log(colors.bg.blue ,colors.fg.whitestrong,
                    "*****************************************************");
        console.log("                                                     ");
        console.log(
                    "                ",colors.bg.greenbright , colors.fg.yellowstrong,"BANCO ",colors.fg.yellow,"BLUERED",colors.bg.blue,"                ");
        console.log("                                                     ");
        console.log(colors.bg.blue , colors.fg.whitestrong,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\n",colors.bg.blue,"Banco BLUERED - SEJA NO VERMELHO OU NO AZUL");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log('digite o numero da agencia: ')
                agencia = readlinesync.questionInt("")
                
                console.log('digite o nome do titular da conta: ')
                titular = readlinesync.question("")
                
                console.log('digite o tipo da conta: ')
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false}) +1;
                
                console.log('digite o saldo da conta: ')
                saldo = readlinesync.questionInt("")

                switch (tipo){
                    case 1:
                console.log('digite o limite da conta: ')
                limite = readlinesync.questionFloat("")
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                )
                    break;
                    case 2:
                console.log('digite a data de aniversario da conta: ')
                aniversario = readlinesync.questionInt("")
                contas.cadastrar(
                    new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                )
                    break;
                }
                keyPress()
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                
                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);
                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta) {

                    console.log('Digite o Número da Agência: ');
                    agencia = readlinesync.questionInt("");

                    console.log('Digite o Nome do Titular da Conta: ');
                    titular = readlinesync.question("");

                    console.log('Digite o Saldo da Conta: ');
                    saldo = readlinesync.questionFloat("");

                    tipo = conta.tipo;

                    switch (tipo) {
                        case 1:
                            console.log('Digite o Limite da Conta: ');
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log('Digite a Data de Aniversário da Conta: ');
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                } else {
                    console.log(`\nA Conta número: ${numero} não foi encontrada!`)
                }

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");
                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log("\n\nSaque\n\n");
                keyPress()
                break;
            case 7:
                console.log("\n\nDepósito\n\n");
                keyPress()
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log(
                "\n",colors.bg.blue ,colors.fg.whitestrong,"*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log(colors.bg.green,"Luiz Ribeiro",colors.bg.blue);
    console.log(colors.bg.green,"Github.com/LuizRibeiro-dev",colors.bg.blue);
    console.log("*****************************************************",colors.reset);
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
 

main();