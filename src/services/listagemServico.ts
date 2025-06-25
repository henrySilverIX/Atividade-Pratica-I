import Servico from "../model/Servico";
import Listagem from "./Listagem";

export default class ListagemServico extends Listagem{
    private servicos: Array<Servico>;


    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos;
    }




    public listar(): void {
        console.log("Serviços:")
        this.servicos.forEach((item) => {
            console.log(
       `Nome do serviço: ${item.getNome}
Valor do serviço: ${item.getValor}
--------------------------------------------------------------------\n`);
        })
    }
}