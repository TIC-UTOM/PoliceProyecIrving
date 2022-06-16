import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/inicio';
import Policias from './components/policias';
import Policiafigueroa from './components/oficial_figueroa'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route path="policias/*" element={<Policias/>} />
        <Route path="figueroa/*" element={<Policiafigueroa/>} />
      </Routes>
    </Router>
  );
}

export default App;
