import react from "react";
import '../styles/noticias.css';
import facebook from '../images/facebook.png'
import twitter from '../images/gorjeo.png'
import logopoli from '../images/policialogo.png'



function Noticias(){
  return (
    <div className="banner-contain">
      <nav class="navbar navbar-expand-sm navbar-light justify-content-center">
            <div class="container-fluid justify-content-center">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/figueroa">Policias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/tenencias">Tenencias</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="/"><img src={logopoli} alt="Logo Policia" height="150" width="150" /></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/noticias">Noticias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/apirest">Api Rest</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

      <section id="pantallas-divididas">
              <div className="pa-derecha">
                <h1><span class="creative">Noticias</span><br/>
                Mas recientes
                </h1>
                </div>
              <div className="pa-izquierda" id="morra-fija"> 

              <div class="card text-center">
                <div class="card-header">
                Noticias
                </div>
                <div class="card-body">
                  <h5 class="card-title">Denuncian asaltos en central de Autobuses de Maravatío</h5>
                  <p class="card-text">Maravatío, Michoacán.- Mediante redes sociales se han difundido presuntos asaltos en la Central de Autobuses de Maravatío.</p>
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
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
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
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
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
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
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
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
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
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
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
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
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
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
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
                </div>
                <div class="card-footer text-muted">
                13 junio, 2022
                </div>
              </div>
              </div>
            </section>
            <div className="footer">
                <a class="nav-link" href="/"><img src={logopoli} alt="Logo Policia Michoacan" height="150" width="200"/></a>
                <a class="nav-link" href="https://www.facebook.com/Pagina-de-prueba-103029978258656/?ref=pages_you_manage"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
                <a class="nav-link" href="https://twitter.com/Irvinphantom"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
                <p><a href="/">Policia de Michoacán</a> © 2022. <a href="ojdana/*" target="_blank">Terminos y Condiciones</a></p>
              </div>
    </div>
  )
}

export default Noticias;