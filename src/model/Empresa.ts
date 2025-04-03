import Cliente from "./Cliente"
import Produto from "./Produto";
import Servico from "./Servico";

export default class Empresa{
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(){}
    
    public get getClientes():Array<Cliente>{
        return this.clientes;
    }

    public get getProdutos():Array<Produto>{
        return this.produtos;
    }

    public get getServicos():Array<Servico>{
        return this.servicos;
    }

}