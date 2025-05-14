import Cliente from "../model/Cliente"
import CPF from "../model/CPF"
import ListagemClientes from "../services/listagemCliente";
import CadastroCliente from "../services/cadastroCliente";
import CadastroProduto from "../services/cadastroProduto";
import ListagemProduto from "../services/listagemProdutos";


const prompt = require('prompt-sync')();

let clientes = []
let produtos = []


let numDeProdutos = Number(prompt('Quantos produtos você quer cadastrar? '));
let cadastroProduto = new CadastroProduto(produtos);

console.log("Cadastro dos Produtos:\n")
for(let i = 0; i < numDeProdutos; i++){
    cadastroProduto.cadastrar()
}



let numbDeClientes = Number(prompt('Quantos clientes você quer cadastrar? '));
let cadCliente = new CadastroCliente(clientes)

console.log("Cadastro dos Cliente:\n")
for(let i = 0; i < numbDeClientes; i++){
    cadCliente.cadastrar()
}


let listCliente = new ListagemClientes(clientes)
let listProduto = new ListagemProduto(produtos)

listCliente.listar()
listProduto.listar()

