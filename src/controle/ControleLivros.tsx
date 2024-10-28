import { Component } from "react";

class ControleLivros extends Component {
    livros = [
        { 
            codigo: 1, 
            codEditora: 1, 
            titulo: "Jornada das Estrelas", 
            resumo: "Uma épica aventura intergaláctica onde dois exploradores enfrentam desafios e descobrem segredos que podem mudar o destino da humanidade.", 
            autores: ["Carlos Silva", "Ana Pereira"]
        },
        { 
            codigo: 2, 
            codEditora: 2, 
            titulo: "O Mistério do Vale", 
            resumo: "Em um pequeno vilarejo cercado por montanhas, um grupo de amigos investiga uma série de eventos estranhos, revelando um mistério que remonta a gerações.", 
            autores: ["Mariana Santos", "João Souza"]
        },
        { 
            codigo: 3, 
            codEditora: 3, 
            titulo: "Segredos do Oceano", 
            resumo: "Uma jovem oceanógrafa embarca em uma expedição para desvelar os segredos do fundo do mar, encontrando criaturas místicas e tesouros perdidos.", 
            autores: ["Felipe Martins", "Larissa Rocha"]
        },
        { 
            codigo: 4, 
            codEditora: 4, 
            titulo: "A Magia do Tempo", 
            resumo: "Em um mundo onde o tempo é uma mercadoria, um jovem se vê envolvido em uma trama perigosa que pode alterar o curso da história.", 
            autores: ["Roberto Costa", "Fernanda Lima"]
        }
    ];

    getLivros() {
        console.log(this.livros);
        return this.livros;
    }

    incluir(novoLivro: any) {
        let maiorCodigo = 0;
        for (let livro of this.getLivros()) {
            maiorCodigo = Math.max(maiorCodigo, livro.codigo);
        }

        novoLivro.codigo = maiorCodigo + 1;
        this.livros.push(novoLivro);  
    }

    excluir(codigo: number) {
        const indexLivro = this.livros.findIndex((x) => x.codigo === codigo);
        this.livros.splice(indexLivro, 1)
        console.log(this.livros);
    }
}

export default ControleLivros