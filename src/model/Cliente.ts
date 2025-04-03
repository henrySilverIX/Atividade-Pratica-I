import CPF from "./CPF"
import Produto from "./Produto";
import RG from "./RG"
import Servico from "./Servico";
import Telefone from "./Telefone";

export default class Cliente{
    public nome: string;
    public nomeSocial: string;
    private cpf: CPF;
    private rgs: Array<RG>;
    private dataCadastro: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    
    constructor(nome: string, nomeSocial: string, cpf: CPF){
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
    }

    public get getCPF():CPF{
        return this.cpf;
    }

    public get getRGs():Array<RG>{
        return this.rgs;
    }

    public get getDataCadastro():Date{
        return this.dataCadastro;
    }

    public get getTelefones():Array<Telefone>{
        return this.telefones;
    }

    public get getProdutosConsumidos():Array<Produto>{
        return this.produtosConsumidos;
    }

    public get getServicosConsumidos():Array<Servico>{
        return this.servicosConsumidos;
    }
    
}