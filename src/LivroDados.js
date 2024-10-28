import instanciaControleLivros from "./ProviderLivros";
import ControleEditora from "./controle/ControleEditora";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const controleEditora = new ControleEditora();

const LivroDados = (props) => {
    const editoras = controleEditora.getEditoras();
    const opcoes = editoras.map((editora) => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [codEditora, setCodEditora] = useState(0);
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");

    const navigate = useNavigate();

    const tratarCombo = (evento) => {
        const value = Number(evento.target.value);
        setCodEditora(value);
    };

    const incluir = (evento) => {
        evento.preventDefault();

        const novoLivro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n')
        };

        instanciaControleLivros.incluir(novoLivro);
        navigate("/livrolista", { replace: true });
    };

    return (<main>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
            <div className="form-group">
                <label htmlFor="titulo">Título</label>
                <input type="text" id="titulo" className="form-control" 
                onChange={(evento) => setTitulo(evento.target.value)}></input>
            </div>
            <div className="form-group">
                <label htmlFor="resumo">Resumo</label>
                <textarea type="text" id="resumo" className="form-control"
                onChange={(evento) => setResumo(evento.target.value)}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="editora">Editora</label>
                <select type="text" id="editora" className="form-control"
                onChange={tratarCombo}>
                    {opcoes.map((opcao) => (
                        <option key={opcao.text} value={opcao.value}>{opcao.text}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="autores">Autores (1 por linha)</label>
                <textarea type="text" id="autores" className="form-control"
                onChange={(evento) => setAutores(evento.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: "0.7rem" }}>Salvar Dados</button>
        </form>
    </main>);
}

export default LivroDados;