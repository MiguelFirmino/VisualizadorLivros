import { Component } from 'react';

interface PropsEditora {
    codEditora : number, 
    nome : string
}

class Editora extends Component<PropsEditora> {
    render() {
        const { codEditora, nome } = this.props

        return <>
            <h1>Cód Editora: {codEditora}</h1>
            <h1>Nome: {nome}</h1>
        </>;
    }
}

export default Editora;