import readlinesync = require("readline-sync");
import {colors} from './src/util/colors';
import { Conta } from "./src/model/conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
export function main() {

    let opcao: number;

    //const c1: Conta = new Conta(1, 1234, 1, 'Julia Zoratti', 800000.00);
    //const c2: Conta = new Conta(2, 1234, 2, 'Marcella Sanches', 600000.00);

    //c1.visualizar();
    //c2.visualizar();

    //console.log(`\nO Saldo da conta 01 é: ${c1.saldo}`);

    //c2.saldo = 900000.00;

    //console.log(`\nO Saldo da conta 02 é: ${c2.saldo}`);

    //console.log(`\nSacar 100.00 Reais da Conta C1: ${c1.sacar(100)}`); // true
    //c1.visualizar();

    //console.log(`\nSacar 1000000.00 Reais da Conta C2: ${c2.sacar(1000000)}`); // false
    //c2.visualizar();

    //console.log(`\nDepositar 200000.00 Reais da Conta C1: `); 
    //c1.depositar(200000)
    //c1.visualizar();

    //console.log(`\nDepositar 300000.25 Reais da Conta C2: `); 
    //c2.depositar(300000.25)
    //c2.visualizar();

    const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, 'Carlos Antonio', 1000000.00, 100000.00);
    const cc2: ContaCorrente = new ContaCorrente(4, 1234, 1, 'Raimundo Sousa', 1000.00, 100.00);

    cc1.visualizar();
    cc2.visualizar();

    console.log(`\nSaque de R$ 25.000,00 na Conta CC1: ${cc1.sacar(25000)}`);
    cc1.visualizar();

    console.log(`\nSaque de R$ 1.500,00 na Conta CC2: ${cc2.sacar(15000)}`);

    console.log(`\nDepositar R$ 3.000.99 Reais da Conta CC2: `); 
    cc2.depositar(3000.99)
    cc2.visualizar();


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

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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

main();