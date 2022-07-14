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
import ApiRest from './components/usuarios';
import News from './components/new';
import Newss from './components/newss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="figueroa/*" element={<Policiafigueroa/>} />
        <Route exact path="ojdana/*" element={<Policias/>} />
        <Route exact path="tenencias/*" element={<Tenencias/>} />
        <Route exact path="noticias/*" element={<Noticias/>} />
        <Route exact path="apirest/*" element={<ApiRest/>} />
        <Route exact path="new/*" element={<News/>} />
        <Route exact path="newss/*" element={<Newss/>} />
      </Routes>
    </Router>
  );
}

export default App;