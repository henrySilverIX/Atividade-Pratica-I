import Cliente from "../model/Cliente"
import CPF from "../model/CPF"
import ListagemClientes from "../services/listagemCliente";
import CadastroCliente from "../services/cadastroCliente";


let clientes = []

let cadCliente = new CadastroCliente(clientes)

cadCliente.cadastrar()

let listCliente = new ListagemClientes(clientes)


listCliente.listar()

