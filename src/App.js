import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicio from './pages/home/Home';
import PaginaAcercaDe from './pages/home/Home';
import PaginaContacto from './pages/home/Home';
import Encabezado from './pages/home/Home';
import PaginaInicial from './pages/home/Home';
import './styles/App.cs'
import Main from './pages/main/Main';

function App() {
  return (
    <Router>
      <Header />
      <nav> 
        <link to ="/"> Inicio</link>
        <link to ="/about">Acerca de</link>
        <link to ="/contact">Contacto</link>
      </nav>
      <Routes>
        <Route path ="/" element = {<PaginaInicio />} />
        <Route path ="/" element = {<PaginaAcercaDe />} />
        <Route path ="/" element = {<PaginaContacto />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
