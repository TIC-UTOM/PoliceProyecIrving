import react from "react";
import '../styles/noticias.css';
import facebook from '../images/facebook.png'
import twitter from '../images/gorjeo.png'



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
                  <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
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
                  <h5 class="card-title">Denuncian asaltos en central de Autobuses de Maravat??o</h5>
                  <p class="card-text">Maravat??o, Michoac??n.- Mediante redes sociales se han difundido presuntos asaltos en la Central de Autobuses de Maravat??o.</p>
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
                  <h5 class="card-title">Presa de Tepuxtepec se encuentra a su m??xima capacidad</h5>
                  <p class="card-text">Maravatio, Michoac??n.- Desde la madrugada y derivado de la lluvia intensa de este s??bado...</p>
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
                  <h5 class="card-title">Investigan si hay michoacanos en tr??iler de Texas</h5>
                  <p class="card-text">La Secretar??a del Migrante de Michoac??n mantiene comunicaci??n permanente con autoridades federales...</p>
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
                  <h5 class="card-title">Inversi??n de 4 mil mdp para conectar por autopista Maravat??o ??? Zit??cuaro</h5>
                  <p class="card-text">El gobernador de Michoac??n, Alfredo Ram??rez Bedolla, inform?? que se invertir??n 4 mil millones de pesos para...</p>
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
                  <h5 class="card-title">Localizan a adolescente reportada como desaparecida en Maravat??o</h5>
                  <p class="card-text">La Fiscal??a General del Estado de Michoac??n (FGE) desactiv?? Alerta Amber tras localizar a una adolescente de 17 a??os...</p>
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
                  <p class="card-text">La ma??ana de este jueves se report?? un accidente sobre la autopista M??xico...</p>
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
                  <h5 class="card-title">Peregrinos de Zit??cuaro iban a visitar a la Virgen de San Juan, un tr??iler los embisti??</h5>
                  <p class="card-text">Durante esta ma??ana un grupo de peregrinos fueron atropellados por un tr??iler sobre la autopista Celaya...</p>
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
                  <p class="card-text">En su inter??s de respaldar a la ciudadan??a, el Gobierno de Michoac??n present?? al Congreso del Estado una solicitud...</p>
                  <a href="newss"><button type="tenencias" class="btn btn-outline-warning">Ver mas...</button></a>
                </div>
                <div class="card-footer text-muted">
                13 junio, 2022
                </div>
              </div>
              </div>
            </section>
            <div className="footer">
                <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
                <a class="nav-link" href="https://www.facebook.com/Pagina-de-prueba-103029978258656/?ref=pages_you_manage"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
                <a class="nav-link" href="https://twitter.com/Irvinphantom"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
                <p><a href="/">Policia de Michoac??n</a> ?? 2022. <a href="ojdana/*" target="_blank">Terminos y Condiciones</a></p>
              </div>
    </div>
  )
}

export default Noticias;