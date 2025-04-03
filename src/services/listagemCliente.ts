import Cliente from "../model/Cliente";
import Listagem from "./Listagem";

export default class ListagemClientes extends Listagem{
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        this.clientes.forEach((item) => {
            console.log(
       `Clientes:
Nome: ${item.nome}
Nome Social: ${item.nomeSocial}
CPF: 
  Número: ${item.getCPF.getValor}
  Data de Emissão: ${item.getCPF.getDataEmissao}
--------------------------------------------------------------------\n`);
        })
    }

}