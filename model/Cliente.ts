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
    
    

}