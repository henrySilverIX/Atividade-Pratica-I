import Entrada from "../io/Entrada";
import Cliente from "../model/Cliente";
import CPF from "../model/CPF";
import Cadastro from "./Cadastro";


export default class CadastroCliente extends Cadastro{
    private clientes:Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log("Início do Cadastro dos Cliente:\n")
        let nome_cliente = this.entrada.receberTexto("Informe o nome do cliente: ")
        let nomeSocial = this.entrada.receberTexto("Informe o nome Social do cliente: ")
        let cpf_num = this.entrada.receberTexto("Informe o valor do CPF: ")
        let data = this.entrada.receberTexto("Informe a data de emissão do CPF (dd/mm/yyyy): ")
        let data_emissao_part = data.split('/')
        let dia = new Number(data_emissao_part[0].valueOf()).valueOf()
        let mes = new Number(data_emissao_part[1].valueOf()).valueOf()
        let ano = new Number(data_emissao_part[2].valueOf()).valueOf()

        let data_emissao = new Date(ano, (mes-1), dia);
        let cpf = new CPF(cpf_num, data_emissao);
        let cliente = new Cliente(nome_cliente, nomeSocial, cpf);
        this.clientes.push(cliente)
        console.log("Cadastro Concluído");
    }

}