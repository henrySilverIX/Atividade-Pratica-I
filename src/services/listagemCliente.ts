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
Data de Emissão: ${item.getRGs[0].getDataEmissao}
--------------------------------------------------------------------\n`);
        })
    }

}