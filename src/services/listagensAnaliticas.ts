import Cliente from "../model/Cliente";
import Produto from "../model/Produto";
import Servico from "../model/Servico";



export default class ListagensAnaliticas {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listarTop10ClientesMaisConsumiramQuantidade(): void {
        console.log("\n🔟 Top 10 clientes que mais consumiram produtos ou serviços (por quantidade):");

        const clientesOrdenados = this.clientes
            .map(cliente => {
                const totalConsumido = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
                return { cliente, totalConsumido };
            })
            .sort((a, b) => b.totalConsumido - a.totalConsumido)
            .slice(0, 10);

        if (clientesOrdenados.length === 0) {
            console.log("Nenhum consumo registrado ainda.");
            return;
        }

        clientesOrdenados.forEach((entrada, index) => {
            const { cliente, totalConsumido } = entrada;
            console.log(`\n${index + 1}º - ${cliente.nome} (${cliente.getCPF.getValor})`);
            console.log(`Produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
            console.log(`Serviços consumidos: ${cliente.getServicosConsumidos.length}`);
            console.log(`Total: ${totalConsumido}`);
        });
    }


    public listarClientesPorGenero(): void {
        console.log("\n📋 Listagem de clientes por gênero:");

        const generos: { [genero: string]: Cliente[] } = {};

        this.clientes.forEach(cliente => {
            const genero = cliente.genero.toLowerCase().trim();

            if (!generos[genero]) {
                generos[genero] = [];
            }
            generos[genero].push(cliente);
        });

        for (const genero in generos) {
            console.log(`\nGênero: ${genero[0].toUpperCase() + genero.slice(1)} (${generos[genero].length} cliente(s))`);
            generos[genero].forEach(cliente => {
                console.log(`- ${cliente.nome} (${cliente.getCPF.getValor})`);
            });
        }
    }


    public listarProdutosEServicosMaisConsumidos(): void {
        console.log("\n📊 Produtos e serviços mais consumidos (geral):");

        const contagemProdutos: { [nome: string]: number } = {};
        const contagemServicos: { [nome: string]: number } = {};

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(prod => {
                const nome = prod.getNome;
                contagemProdutos[nome] = (contagemProdutos[nome] || 0) + 1;
            });

            cliente.getServicosConsumidos.forEach(serv => {
                const nome = serv.getNome;
                contagemServicos[nome] = (contagemServicos[nome] || 0) + 1;
            });
        });

        const produtosOrdenados = Object.entries(contagemProdutos)
            .sort((a, b) => b[1] - a[1]);

        const servicosOrdenados = Object.entries(contagemServicos)
            .sort((a, b) => b[1] - a[1]);

        console.log("\n🧴 Produtos mais consumidos:");
        produtosOrdenados.forEach(([nome, qtd], i) => {
            console.log(`${i + 1}º - ${nome}: ${qtd} vez(es)`);
        });

        console.log("\n💅 Serviços mais consumidos:");
        servicosOrdenados.forEach(([nome, qtd], i) => {
            console.log(`${i + 1}º - ${nome}: ${qtd} vez(es)`);
        });
    }

    public listarProdutosEServicosMaisConsumidosPorGenero(): void{
        console.log("\n📊 Produtos e serviços mais consumidos por gênero:");

        const generos: { [genero: string]: Cliente[] } = {};

        // Agrupando clientes por gênero
        this.clientes.forEach(cliente => {
            const genero = cliente.genero.toLowerCase().trim();
            if (!generos[genero]) {
                generos[genero] = [];
            }
            generos[genero].push(cliente);
        });

        // Para cada gênero, contar os produtos e serviços
        for (const genero in generos) {
            const grupo = generos[genero];

            const contagemProdutos: { [nome: string]: number } = {};
            const contagemServicos: { [nome: string]: number } = {};

            grupo.forEach(cliente => {
                cliente.getProdutosConsumidos.forEach(prod => {
                    const nome = prod.getNome;
                    contagemProdutos[nome] = (contagemProdutos[nome] || 0) + 1;
                });

                cliente.getServicosConsumidos.forEach(serv => {
                    const nome = serv.getNome;
                    contagemServicos[nome] = (contagemServicos[nome] || 0) + 1;
                });
            });

            const produtosOrdenados = Object.entries(contagemProdutos)
                .sort((a, b) => b[1] - a[1]);

            const servicosOrdenados = Object.entries(contagemServicos)
                .sort((a, b) => b[1] - a[1]);

            console.log(`\n👤 Gênero: ${genero[0].toUpperCase() + genero.slice(1)} (${grupo.length} cliente(s))`);

            console.log("🧴 Produtos:");
            if (produtosOrdenados.length === 0) {
                console.log("- Nenhum produto consumido");
            } else {
                produtosOrdenados.forEach(([nome, qtd], i) => {
                    console.log(`${i + 1}º - ${nome}: ${qtd} vez(es)`);
                });
            }

            console.log("💅 Serviços:");
            if (servicosOrdenados.length === 0) {
                console.log("- Nenhum serviço consumido");
            } else {
                servicosOrdenados.forEach(([nome, qtd], i) => {
                    console.log(`${i + 1}º - ${nome}: ${qtd} vez(es)`);
                });
            }
        }
    }


    public listarTop10ClientesMenosConsumiram(): void {
        console.log("\n📉 Top 10 clientes que menos consumiram produtos ou serviços (em quantidade):");

        const clientesOrdenados = this.clientes
            .map(cliente => {
                const totalConsumido = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
                return { cliente, totalConsumido };
            })
            .sort((a, b) => a.totalConsumido - b.totalConsumido)
            .slice(0, 10);

        if (clientesOrdenados.length === 0) {
            console.log("Nenhum consumo registrado.");
            return;
        }

        clientesOrdenados.forEach((entrada, index) => {
            const { cliente, totalConsumido } = entrada;
            console.log(`\n${index + 1}º - ${cliente.nome} (${cliente.getCPF.getValor})`);
            console.log(`Produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
            console.log(`Serviços consumidos: ${cliente.getServicosConsumidos.length}`);
            console.log(`Total: ${totalConsumido}`);
        });
    }


    public listarTop5ClientesMaisConsumiramEmValor(): void {
        console.log("\n💰 Top 5 clientes que mais consumiram em valor total:");

        const clientesOrdenados = this.clientes
            .map(cliente => {
                const totalProdutos = cliente.getProdutosConsumidos.reduce((soma, produto) => {
                    return soma + parseFloat(produto.getValor);
                }, 0);

                const totalServicos = cliente.getServicosConsumidos.reduce((soma, servico) => {
                    return soma + parseFloat(servico.getValor);
                }, 0);

                const total = totalProdutos + totalServicos;

                return { cliente, total };
            })
            .sort((a, b) => b.total - a.total)
            .slice(0, 5);

        if (clientesOrdenados.length === 0) {
            console.log("Nenhum consumo registrado.");
            return;
        }

        clientesOrdenados.forEach((entrada, index) => {
            const { cliente, total } = entrada;
            console.log(`\n${index + 1}º - ${cliente.nome} (${cliente.getCPF.getValor})`);
            console.log(`Valor total consumido: R$ ${total.toFixed(2)}`);
        });
    }

}
