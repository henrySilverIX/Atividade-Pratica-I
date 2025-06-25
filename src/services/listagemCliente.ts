import Cliente from "../model/Cliente";
import Listagem from "./Listagem";

export default class ListagemClientes extends Listagem{
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
    }

    public listar(): void {
    console.log("Clientes:")
    this.clientes.forEach((item) => {
        console.log(
`Nome: ${item.nome}
Nome Social: ${item.nomeSocial}
Gênero: ${item.genero}
CPF:
Número: ${item.getCPF.getValor}
Data de Emissão: ${item.getCPF.getDataEmissao}
RG:
Número: ${item.getRGs[0].getValor}
Data de Emissão: ${item.getRGs[0].getDataEmissao}`);

        console.log("Produtos Consumidos:");
        item.getProdutosConsumidos.forEach(produto => {
            console.log(`- ${produto.getNome} (R$${produto.getValor})`);
        });

        console.log("Serviços Consumidos:");
        item.getServicosConsumidos.forEach(servico => {
            console.log(`- ${servico.getNome} (R$${servico.getValor})`);
        });

        console.log("--------------------------------------------------------------------\n");
    })
}


}