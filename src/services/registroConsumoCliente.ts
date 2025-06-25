import Cliente from "../model/Cliente";
import Produto from "../model/Produto";
import Servico from "../model/Servico";
import Entrada from "../io/Entrada";

export default class RegistroConsumoCliente {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public registrar(): void {
        console.log("\nRegistro de consumo");
        const cpf = this.entrada.receberTexto("Digite o CPF do cliente: ");

        const cliente = this.clientes.find(cli => cli.getCPF.getValor === cpf);
        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }

        let opcao = 0;
        while (opcao !== 3) {
            console.log("\n1 - Adicionar produto\n2 - Adicionar serviço\n3 - Finalizar");
            opcao = this.entrada.receberNumero("Escolha uma opção: ");

            switch (opcao) {
                case 1:
                    this.produtos.forEach((produto, index) => {
                        console.log(`${index + 1} - ${produto.getNome}`);
                    });
                    const prodIndex = this.entrada.receberNumero("Escolha o produto: ") - 1;
                    const produtoSelecionado = this.produtos[prodIndex];
                    cliente.getProdutosConsumidos.push(produtoSelecionado);
                    console.log(`Produto "${produtoSelecionado.getNome}" adicionado ao cliente.`);
                    break;

                case 2:
                    this.servicos.forEach((servico, index) => {
                        console.log(`${index + 1} - ${servico.getNome}`);
                    });
                    const servIndex = this.entrada.receberNumero("Escolha o serviço: ") - 1;
                    const servicoSelecionado = this.servicos[servIndex];
                    cliente.getServicosConsumidos.push(servicoSelecionado);
                    console.log(`Serviço "${servicoSelecionado.getNome}" adicionado ao cliente.`);
                    break;
            }
        }
    }
}
