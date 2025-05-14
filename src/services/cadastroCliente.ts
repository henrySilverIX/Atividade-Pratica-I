import Entrada from "../io/Entrada";
import Cliente from "../model/Cliente";
import CPF from "../model/CPF";
import RG from "../model/RG";
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
        let rg_lista = [];

        let nome_cliente = this.entrada.receberTexto("Informe o nome do cliente: ");
        let nomeSocial = this.entrada.receberTexto("Informe o nome Social do cliente: ");
        let genero = this.entrada.receberTexto("Informe o seu gênero: ");
        let cpf_num = this.entrada.receberTexto("Informe o valor do CPF: ");
        let data = this.entrada.receberTexto("Informe a data de emissão do CPF (dd/mm/yyyy): ");
        let data_emissao_part = data.split('/');
        let dia = new Number(data_emissao_part[0].valueOf()).valueOf();
        let mes = new Number(data_emissao_part[1].valueOf()).valueOf();
        let ano = new Number(data_emissao_part[2].valueOf()).valueOf();
        
        //Cadastro dos RGs
        let rg_num = this.entrada.receberTexto("Informe o número do RG: ");
        let data_emissao_rg = this.entrada.receberTexto("Informe a data de emissão do RG (dd/mm/yyyy):");
        let data_emissao_rg_part = data_emissao_rg.split('/');
        let dia_rg = new Number(data_emissao_rg_part[0].valueOf()).valueOf();
        let mes_rg = new Number(data_emissao_rg_part[1].valueOf()).valueOf();
        let ano_rg = new Number(data_emissao_rg_part[2].valueOf()).valueOf();

        let data_emissao_rg_final = new Date(ano_rg, (mes_rg-1), dia_rg);

        let rg = new RG(rg_num, data_emissao_rg_final);

        rg_lista.push(rg);

        let data_emissao = new Date(ano, (mes-1), dia);
        let cpf = new CPF(cpf_num, data_emissao);
        let cliente = new Cliente(nome_cliente, nomeSocial, genero, cpf, rg_lista);
        this.clientes.push(cliente);
        console.log("Cadastro Concluído");
    }

}