import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/inicio';
import Policias from './components/ojdana';
import Policiafigueroa from './components/figueroa';
import Tenencias from './components/tenencias';
import Noticias from './components/noticias';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route path="figueroa/*" element={<Policiafigueroa/>} />
        <Route path="ojdana/*" element={<Policias/>} />
        <Route path="tenencias/*" element={<Tenencias/>} />
        <Route path="noticias/*" element={<Noticias/>} />
      </Routes>
    </Router>
  );
}

export default App;