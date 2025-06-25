import Entrada from "../io/Entrada";
import Servico from "../model/Servico";
import Cadastro from "./Cadastro";


export default class CadastroServico extends Cadastro{
    private entrada: Entrada;
    private servicos: Array<Servico>;

    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        let nomeServico = this.entrada.receberTexto("Digite o nome do serviço: ");
        let valorServico = this.entrada.receberTexto("Digite o valor do serviço: ");
        
        let servico = new Servico(nomeServico, valorServico);

        this.servicos.push(servico);
        console.log("Cadastro Serviço Concluído");
    }
}