export default class Produto{
    public nome:string;
    public valor:string;
    public quantidadeEmEstoque:Number;


    constructor(nomeProduto:string, valorProduto:string, quantidadeEstoque:Number){
        this.nome = nomeProduto;
        this.valor = valorProduto;
        this.quantidadeEmEstoque = quantidadeEstoque;
    }


    public get getNome():string{
        return this.nome;
    }

    public get getValor():string{
        return this.valor;
    }

    public get getQuantidadeEstoque():Number{
        return this.quantidadeEmEstoque;
    }
}