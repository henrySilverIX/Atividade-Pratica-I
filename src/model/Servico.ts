export default class Servico{
    public nome:string;
    public valor:string;

    constructor(nomeProduto:string, valorProduto:string){
        this.nome = nomeProduto;
        this.valor = valorProduto;
    }


    public get getNome():string{
        return this.nome;
    }

    public get getValor():string{
        return this.valor;
    }
}