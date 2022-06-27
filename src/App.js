import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/inicio';
import Policias from './components/ojdana';
import Policiafigueroa from './components/figueroa'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route path="figueroa/*" element={<Policiafigueroa/>} />
        <Route path="ojdana/*" element={<Policias/>} />
      </Routes>
    </Router>
  );
}

export default App;