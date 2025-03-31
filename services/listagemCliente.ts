import Cliente from "../model/Cliente";
import Listagem from "./Listagem";

export default class ListagemClientes extends Listagem{
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log("Lista dos clientes:\n");
        
    }

}