import react from 'react';
import '../styles/inicio.css'
import fondo from '../images/background2.jpg'
import oficial1 from '../images/policia1.jpg'
import oficial2 from '../images/policia2.jpg'
import oficial3 from '../images/policia3.png'
import facebook from '../images/facebook.png'
import twitter from '../images/gorjeo.png'

function Inicio() {
return (
    <div className="banner-container">
          <nav class="navbar navbar-expand-sm navbar-light justify-content-end">
            <div class="container-fluid justify-content-end">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="nav justify-content-end">
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
        <div className='div-posicionados'>
          <h1 className='banner-title1'>
            <span>
              <span>POLICIA DE MICHOACAN</span>
            </span> 
          </h1>
            <div className='banner-text'>
              <p className='texto-informativo'>La Misión de la Policía Auxiliar es proteger la integridad física, los bienes, valores, mercancías de los particulares, empresarios, así como de las instituciones públicas y privadas de quienes contratan nuestros servicios dentro del límite territorial del estado de Michoacán, mediante los servicios de protección.</p>
            </div>
        </div>

          <div className="policia-hdz">
            <img className="img-hdz" src={oficial1} />
            <div className="info-policiahdz">
              <h2>
                <span class="creative">Official</span><br/>
                Antonio Hernandez
              </h2>
              <p>Apenas dos meses después de graduarse de la Academia de Policía, el official Hernandez y su Oficial de Entrenamiento de Campo respondieron una llamada de violencia doméstica que amenazaba su vida. No solo para la víctima, sino también para los oficiales.</p>
              <div>
                <a href="new/*"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
              </div>
            </div>
          </div>

            <div className="policia-lopez">
              <img src={oficial2} />
              <div className="info-policialopez">
                <h2>
                <span class="creative">Official</span><br/>
                Leticia Lopez
                </h2>
                <p>After finishing his shift, Officer Figueroa was on his way home when he noticed a man standing on an overpass bridge. Compelled to do the right thing, Officer Figueroa stopped to provide a helping hand.</p>
                <div>
                <a href="new"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
            </div>

            <div className="policia-estrada">
              <img src={oficial3} />
              <div className="info-policia-estrada">
                <h2>
                <span class="creative">Official</span><br/>
                Luis Estrada
                </h2>
                <p>After finishing his shift, Officer Figueroa was on his way home when he noticed a man standing on an overpass bridge. Compelled to do the right thing, Officer Figueroa stopped to provide a helping hand.</p>
                <div>
                <a href="new"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
            </div>

            <div className="seccion-abajo">
              <h2>Compaartir tu historia</h2>
              <h2>#PoliciasDeMichacán</h2>
              <p className="tecto-final">La misión del Departamento de Policía de Michoacán es servir, 
              guiar y proteger a la gente de esta ciudad todos los días. La mayoría de las veces, solo
               escuchamos un lado de sus historias. No son nombres familiares. Mucho de lo que hacen se 
               hace detrás de escena, fuera del centro de atención. Los actos cotidianos de bondad y 
               compasión a veces se pasan por alto o se dan por sentados. Pero si tiene una historia que
                le gustaría compartir, nos encantaría que la escuchara.<br/>
                </p>
            </div>
            <div className="footers">
            <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
            <a class="nav-link" href="https://www.facebook.com/Pagina-de-prueba-103029978258656/?ref=pages_you_manage"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
            <a class="nav-link" href="https://twitter.com/Irvinphantom"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
            <p><a href="/">Policia de Michoacán</a> © 2022. <a href="ojdana/*" target="_blank">Terminos y Condiciones</a></p>
          </div>
    </div>
  )
}
export default Inicio;