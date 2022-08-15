import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/inicio';
import Policias from './components/terminos-condiciones';
import Policiafigueroa from './components/policias';
import Tenencias from './components/tenencias';
import Noticias from './components/noticias';
import ApiRest from './components/usuarios';
import AntonioHdz from './components/noticias/antonio-hernandez';
import LetiLopez from './components/noticias/leticia-lopez';
import LuisEstr from './components/noticias/luis-estrada';
import Asaltos from './components/noticias/asaltos';
import Violacion from './components/noticias/presunto-responsable-de-violacion';
import Condenado from './components/noticias/condenado-a-16-anios-de-carcel';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="policias/*" element={<Policiafigueroa/>} />
        <Route exact path="terminos-condiciones/*" element={<Policias/>} />
        <Route exact path="tenencias/*" element={<Tenencias/>} />
        <Route exact path="noticias/*" element={<Noticias/>} />
        <Route exact path="apirest/*" element={<ApiRest/>} />
        <Route exact path="antonio-hernandez/*" element={<AntonioHdz/>} />
        <Route exact path="leticia-lopez/*" element={<LetiLopez/>} />
        <Route exact path="luis-estrada/*" element={<LuisEstr/>} />
        <Route exact path="asaltos/*" element={<Asaltos/>} />
        <Route exact path="presunto-responsable-de-violacion/*" element={<Violacion/>} />
        <Route exact path="condenado-a-16-anios-de-carcel/*" element={<Condenado/>} />
      </Routes>
    </Router>
  );
}

export default App;