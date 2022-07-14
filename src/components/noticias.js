import react from "react";
import '../styles/noticias.css';
import facebook from '../images/facebook.png'
import twitter from '../images/gorjeo.png'



function Noticias(){
  return (
    <div className="banner-container">
      <nav className="header-nav">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="figueroa/*">Policias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tenencias/*">Tenencias</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Noticias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Usuarios</a>
          </li>
        </ul>
      </nav>

      <section id="pantallas-divididas">
              <div className="pa-derecha">
                <h1><span class="creative">Noticias</span><br/>
                Mas recientes
                </h1>
                </div>
              <div className="pa-izquierda"> 

              <div class="card text-center">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">Denuncian asaltos en central de Autobuses de Maravatío</h5>
                  <p class="card-text">Maravatío, Michoacán.- Mediante redes sociales se han difundido presuntos asaltos en la Central de Autobuses de Maravatío.</p>
                  <a href="#" class="btn btn-primary">Ver mas...</a>
                </div>
                <div class="card-footer text-muted">
                20 agosto, 2021
                </div>
              </div>

              <div class="card text-center">
                <div class="card-header">
                  Noticias
                </div>
                <div class="card-body">
                  <h5 class="card-title">Presa de Tepuxtepec se encuentra a su máxima capacidad</h5>
                  <p class="card-text">Maravatio, Michoacán.- Desde la madrugada y derivado de la lluvia intensa de este sábado...</p>
                  <a href="#" class="btn btn-primary">Ver mas...</a>
                </div>
                <div class="card-footer text-muted">
                19 septiembre, 2021
                </div>
              </div>

              <div class="card text-center">
                <div class="card-header">
                Noticias
                </div>
                <div class="card-body">
                  <h5 class="card-title">Investigan si hay michoacanos en tráiler de Texas</h5>
                  <p class="card-text">La Secretaría del Migrante de Michoacán mantiene comunicación permanente con autoridades federales...</p>
                  <a href="#" class="btn btn-primary">Ver mas...</a>
                </div>
                <div class="card-footer text-muted">
                29 junio, 2022
                </div>
              </div>

              <div class="card text-center">
                <div class="card-header">
                Noticias
                </div>
                <div class="card-body">
                  <h5 class="card-title">Inversión de 4 mil mdp para conectar por autopista Maravatío – Zitácuaro</h5>
                  <p class="card-text">El gobernador de Michoacán, Alfredo Ramírez Bedolla, informó que se invertirán 4 mil millones de pesos para...</p>
                  <a href="#" class="btn btn-primary">Ver mas...</a>
                </div>
                <div class="card-footer text-muted">
                20 junio, 2022
                </div>
              </div>

              <div class="card text-center">
                <div class="card-header">
                Noticias
                </div>
                <div class="card-body">
                  <h5 class="card-title">Localizan a adolescente reportada como desaparecida en Maravatío</h5>
                  <p class="card-text">La Fiscalía General del Estado de Michoacán (FGE) desactivó Alerta Amber tras localizar a una adolescente de 17 años...</p>
                  <a href="#" class="btn btn-primary">Ver mas...</a>
                </div>
                <div class="card-footer text-muted">
                27 enero, 2022
                </div>
              </div>

              <div class="card text-center">
                <div class="card-header">
                Noticias
                </div>
                <div class="card-body">
                  <h5 class="card-title">Volcadura en la autopista de Occidente deja 3 lesionadas</h5>
                  <p class="card-text">La mañana de este jueves se reportó un accidente sobre la autopista México...</p>
                  <a href="#" class="btn btn-primary">Ver mas...</a>
                </div>
                <div class="card-footer text-muted">
                16 junio, 2022
                </div>
              </div>

              <div class="card text-center">
                <div class="card-header">
                Noticias
                </div>
                <div class="card-body">
                  <h5 class="card-title">Peregrinos de Zitácuaro iban a visitar a la Virgen de San Juan, un tráiler los embistió</h5>
                  <p class="card-text">Durante esta mañana un grupo de peregrinos fueron atropellados por un tráiler sobre la autopista Celaya...</p>
                  <a href="#" class="btn btn-primary">Ver mas...</a>
                </div>
                <div class="card-footer text-muted">
                7 marzo, 2022
                </div>
              </div>

              <div class="card text-center">
                <div class="card-header">
                Noticias
                </div>
                <div class="card-body">
                  <h5 class="card-title">Bedolla solicita al Congreso ampliar plazo para canje de placas sin multas ni recargos</h5>
                  <p class="card-text">En su interés de respaldar a la ciudadanía, el Gobierno de Michoacán presentó al Congreso del Estado una solicitud...</p>
                  <a href="#" class="btn btn-primary">Ver mas...</a>
                </div>
                <div class="card-footer text-muted">
                13 junio, 2022
                </div>
              </div>
              </div>
            </section>
            <div className="footer">
                <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
                <a class="nav-link" href="/"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
                <a class="nav-link" href="/"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
              </div>
    </div>
  )
}

export default Noticias;