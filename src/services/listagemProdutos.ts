import Produto from "../model/Produto";
import Listagem from "./Listagem";

export default class ListagemProduto extends Listagem{
    private produtos: Array<Produto>;


    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos;
    }




    public listar(): void {
        console.log("Produtos:")
        this.produtos.forEach((item) => {
            console.log(
       `Nome do produto: ${item.getNome}
Valor do Produto: ${item.getValor}
Quantidade em estoque: ${item.getQuantidadeEstoque}
--------------------------------------------------------------------\n`);
        })
    }
}
