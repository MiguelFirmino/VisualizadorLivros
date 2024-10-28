import { Component } from "react";

class ControleEditora extends Component {
    editoras = [
        { codEditora: 1, nome: "Editora Pioneira" },
        { codEditora: 2, nome: "Editora Horizonte" },
        { codEditora: 3, nome: "Marítima" },
        { codEditora: 4, nome: "Aurora CO" }
    ];

    getEditoras() {
        return this.editoras;
    }

    getNomeEditora(codEditora: number) {
        console.log(codEditora);
        const editora = this.editoras.filter((x) => x.codEditora === codEditora)[0];
        return editora ? editora.nome : "Indefinido";
    }
}

export default ControleEditora