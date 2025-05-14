import Entrada from "../io/Entrada";
import Produto from "../model/Produto";
import Cadastro from "./Cadastro";


export default class CadastroProduto extends Cadastro{
    private entrada: Entrada;
    private produtos: Array<Produto>;

    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        let nomeProduto = this.entrada.receberTexto("Digite o nome do produto: ");
        let valorProduto = this.entrada.receberTexto("Digite o valor do produto: ");
        let quantidadeEstoque = this.entrada.receberNumero("Digite a quantidade em estoque: ");
        
        let produto = new Produto(nomeProduto, valorProduto, quantidadeEstoque);

        this.produtos.push(produto);
        console.log("Cadastro Concluído");


    }
}