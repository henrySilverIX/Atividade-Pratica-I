import ListagemClientes from "../services/listagemCliente";
import CadastroCliente from "../services/cadastroCliente";
import CadastroProduto from "../services/cadastroProduto";
import ListagemProduto from "../services/listagemProdutos";
import CadastroServico from "../services/cadastroServico";
import ListagemServico from "../services/listagemServico";
import RegistroConsumoCliente from "../services/registroConsumoCliente";
import ListagensAnaliticas from "../services/listagensAnaliticas";


const prompt = require('prompt-sync')();

let clientes = []
let produtos = []
let servicos = []
let escolha = 0

console.log("BEM-VINDO AO WORLD BEAUTY GROUP");
console.log("Escolha uma das opções que você deseja:");


while(escolha != 5){
console.log("1 - Cadastro de Produtos\n2 - Cadastro de Clientes\n3 - Cadastro de Serviços\n4 - Registrar Consumo\n5 - Sair")
escolha = Number(prompt(""))

    switch(escolha){
        case 1:
            let numDeProdutos = Number(prompt('Quantos produtos você quer cadastrar? '));
            let cadastroProduto = new CadastroProduto(produtos);

            console.log("Cadastro dos Produtos:\n")
            for(let i = 0; i < numDeProdutos; i++){
                cadastroProduto.cadastrar()
            }
            break;
        case 2:
            let numbDeClientes = Number(prompt('Quantos clientes você quer cadastrar? '));
            let cadCliente = new CadastroCliente(clientes)

            console.log("Cadastro dos Cliente:\n")
            for(let i = 0; i < numbDeClientes; i++){
                cadCliente.cadastrar()
            }
            break;
        case 3:
            let numDeServicos = Number(prompt('Quantos serviços você quer cadastrar? '));
            let cadServico = new CadastroServico(servicos)

            console.log("Cadastro dos Serviços:\n")
            for(let i = 0; i < numDeServicos; i++){
                cadServico.cadastrar()
            }
            break;
        case 4:
            let registro = new RegistroConsumoCliente(clientes, produtos, servicos);
            registro.registrar();
            break;
        case 5:
            break;
    }
}


let listagemAnalitica = new ListagensAnaliticas(clientes);
listagemAnalitica.listarTop10ClientesMaisConsumiramQuantidade();
listagemAnalitica.listarClientesPorGenero();
listagemAnalitica.listarProdutosEServicosMaisConsumidos();
listagemAnalitica.listarProdutosEServicosMaisConsumidosPorGenero();
listagemAnalitica.listarTop10ClientesMenosConsumiram();
listagemAnalitica.listarTop5ClientesMaisConsumiramEmValor();


console.log("\nListagem de todos os clientes, produtos e serviços\n");

let listCliente = new ListagemClientes(clientes)
let listProduto = new ListagemProduto(produtos)
let listServico = new ListagemServico(servicos)

listCliente.listar()
listProduto.listar()
listServico.listar()