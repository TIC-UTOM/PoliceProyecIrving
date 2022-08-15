import react from 'react';
import '../styles/inicio.css'
import fondo from '../images/background2.jpg'
import oficial1 from '../images/policia1.jpg'
import oficial2 from '../images/policia2.jpg'
import oficial3 from '../images/policia3.png'
import facebook from '../images/facebook.png'
import twitter from '../images/gorjeo.png'
import logopoli from '../images/policialogo.png'
import { tabTitle } from '../utils/GeneralFunctions';

function Inicio() {
  tabTitle('Inicio');
return (
    <div className="banner-container">
          <nav class="navbar navbar-expand-lg  navbar-light">
              <div class="container-fluid justify-content-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="nav mx-auto">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/policias">Policias</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="/"><img src={logopoli} alt="Logo Policia" height="150" width="150" /></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/tenencias">Tenencias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/noticias">Noticias</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <div className='div-posicionados'>
          <h1 className='banner-title1'>
            <span>
              <span>POLICIA DE MICHOACAN</span>
            </span> 
          </h1>
            <div>
              <p className='texto-informativo'>La Misión de la Policía Auxiliar es proteger la integridad física, los bienes, valores, mercancías de los particulares, empresarios, así como de las instituciones públicas y privadas de quienes contratan nuestros servicios dentro del límite territorial del estado de Michoacán, mediante los servicios de protección.</p>
            </div>
        </div>

          <div className="policia-hdzz">
            <img className="img-hdz" src={oficial1} />
            <div className="info-policiahdzz">
              <h2 className="titulo-policiahdzz">
                <span class="creative">Official</span><br/>
                Antonio Hernandez
              </h2>
              <p>Este policía mexicano puede ser el más famoso de la ciudad y no solo por estar en uno de los 
                lugares más concurridos por visitantes nacionales e Internacionales...</p>
              <div>
                <a href="antonio-hernandez"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
              </div>
            </div>
          </div>

            <div className="policia-lopezz">
              <img src={oficial2} />
              <div className="info-policialopezz">
                <h2>
                <span class="creative">Official</span><br/>
                Leticia Lopez
                </h2>
                <p>Poder femenino al servicio de la ciudadanía. Esta elemento se ha ganado el 
                  reconocimiento de sus compañeros por haber rescatado a una víctima de secuestro 
                  enfrentando a los delincuentes, a sus 25 años de edad...</p>
                <div>
                <a href="leticia-lopez"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
            </div>

            <div className="policia-estradaa">
              <img src={oficial3} />
              <div className="info-policia-estradaa">
                <h2>
                <span class="creative">Official</span><br/>
                Luis Estrada
                </h2>
                <p>Con una historia más tranquila pero no por eso menos admirable, este policía bancario se ha 
                  ganado su renombre entre los vecinos cercanos a una plaza, 
                  donde un día normal en uno de sus rondines recurrentes, se dio cuenta... </p>
                <div>
                <a href="luis-estrada"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
            </div>

            <div className="seccion-abajo">
              <h2 className="abajo">Compartir tu historia</h2>
              <h2>#PoliciasDeMichacán</h2>
              <p className="tecto-final">La misión del Departamento de Policía de Michoacán es servir, 
              guiar y proteger a la gente de esta ciudad todos los días. La mayoría de las veces, solo
               escuchamos un lado de sus historias. No son nombres familiares. Mucho de lo que hacen se 
               hace detrás de escena, fuera del centro de atención. Los actos cotidianos de bondad y 
               compasión a veces se pasan por alto o se dan por sentados. Pero si tiene una historia que
                le gustaría compartir, nos encantaría que la escuchara.<br/>
                </p>
              <footer class="pie-pagina">
                <div class="grupo-1">
                  <div class="box">
                    <figure><a href="/"><img src={logopoli} alt="Logo Policia Michoacan" height="150" width="150"/></a></figure>
                  </div>
                  <div class="box">
                    <figure><a class="nav-link" href="https://www.facebook.com/Pagina-de-prueba-103029978258656/?ref=pages_you_manage"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a></figure>
                    <figure><a class="nav-link" href="https://twitter.com/Irvinphantom"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a></figure>
                  </div>
                </div>
                <div class="grupo-2">
                <small><p><a href="/">Policia de Michoacán</a> © 2022. <a href="terminos-condiciones/*" target="_blank">Terminos y Condiciones</a></p></small>
                </div>
              </footer>
            </div>
    </div>
  )
}
export default Inicio;