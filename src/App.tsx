import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark" style={{ paddingLeft: "1rem", justifyContent: "left" }}>
        <Link className="navbar-brand" to="/livrolista">Catálogo</Link>
        <Link className="navbar-brand" to="/dados">Novo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} /> {/* Raiz aponta para LivroLista */}
        <Route path="/livrolista" element={<LivroLista />} /> 
        <Route path="/dados" element={<LivroDados />} /> 
      </Routes>
    </Router>
  );
}

export default App;