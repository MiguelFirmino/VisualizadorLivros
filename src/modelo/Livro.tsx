import { Component } from 'react';

export interface PropsLivro {
    codigo : number, 
    codEditora : number, 
    titulo : string,
    resumo : string,
    autores : string[]
}

class Livro extends Component<PropsLivro> {
    render() {
        const { codigo, codEditora, titulo, resumo, autores } = this.props
        const listaAutores = autores.map((e) => <li key={e.toString()}>{e}</li>)

        return <>
            <h1>Cód: {codigo}</h1>
            <h1>Cód Editora: {codEditora}</h1>
            <h1>Título: {titulo}</h1>
            <h1>Resumo: {resumo}</h1>
            <ul>{listaAutores}</ul>
        </>;
    }
}

export default Livro;