import instanciaControleLivros from "./ProviderLivros";
import ControleEditora from "./controle/ControleEditora";
import { useState, useEffect } from "react";

const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
      <tr>
        <td>
            <p>{livro.titulo}</p>
            <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
        </td>
        <td>
            {livro.resumo}
        </td>
        <td>
            {nomeEditora}
        </td>
        <td>
            <ul>
                {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
            </ul>
        </td>
      </tr>
    );
};

const LivroLista = (props) => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            setLivros(instanciaControleLivros.getLivros());
            setCarregado(true);
        }
    }, [carregado]);

    const excluir = (codigo) => {
        instanciaControleLivros.excluir(codigo);
        setCarregado(false);
    }

    return (<main>
        <h1>Catalogo de Livros</h1>
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <td>Título</td>
                    <td>Resumo</td>
                    <td>Editora</td>
                    <td>Autores</td>
                </tr>
            </thead>
            <tbody>
                {livros.map((livro) => (
                    <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir}/>
                ))}
            </tbody>
        </table>
    </main>);
}; 

export default LivroLista;