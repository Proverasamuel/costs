import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import styles from './app.module.css'; 
import Home from './components/pages/Main';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Projeto from './components/pages/Projeto';
import NovoProjeto from './components/pages/NovoProjeto';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className={styles.container} >
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Empresa" element={<Empresa/>}/>
            <Route exact path="/Contato" element={<Contato/>}/>
            <Route exact path="/Projeto" element={<Projeto/>}/>
            <Route exact path="/NovoProjeto" element={<NovoProjeto/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
