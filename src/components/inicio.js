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
      <div clasName="header1">
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
        <div className='div-posicionado'>
          <h1 className='banner-title1'>
            <span>
              <span>POLICIA DE MICHOACAN</span>
            </span> 
          </h1>
            <div className='banner-text'>
              <p className='texto-informativo'>La Misi??n de la Polic??a Auxiliar es proteger la integridad f??sica, los bienes, valores, mercanc??as de los particulares, empresarios, as?? como de las instituciones p??blicas y privadas de quienes contratan nuestros servicios dentro del l??mite territorial del estado de Michoac??n, mediante los servicios de protecci??n.</p>
            </div>
        </div>
      </div>

          <div className="policia-hdzz">
            <img className="img-hdz" src={oficial1} width="900" height="600"/>
            <div className="info-policiahdzz">
              <h2>
                <span class="creative">Official</span><br/>
                Antonio Hernandez
              </h2>
              <p>Apenas dos meses despu??s de graduarse de la Academia de Polic??a, el official Hernandez y su Oficial de Entrenamiento de Campo respondieron una llamada de violencia dom??stica que amenazaba su vida. No solo para la v??ctima, sino tambi??n para los oficiales.</p>
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
              <h2>#PoliciasDeMichac??n</h2>
              <p className="tecto-final">La misi??n del Departamento de Polic??a de Michoac??n es servir, 
              guiar y proteger a la gente de esta ciudad todos los d??as. La mayor??a de las veces, solo
               escuchamos un lado de sus historias. No son nombres familiares. Mucho de lo que hacen se 
               hace detr??s de escena, fuera del centro de atenci??n. Los actos cotidianos de bondad y 
               compasi??n a veces se pasan por alto o se dan por sentados. Pero si tiene una historia que
                le gustar??a compartir, nos encantar??a que la escuchara.<br/>
                </p>
            </div>
            <div className="footers">
            <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
            <a class="nav-link" href="https://www.facebook.com/Pagina-de-prueba-103029978258656/?ref=pages_you_manage"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
            <a class="nav-link" href="https://twitter.com/Irvinphantom"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
            <p><a href="/">Policia de Michoac??n</a> ?? 2022. <a href="ojdana/*" target="_blank">Terminos y Condiciones</a></p>
          </div>
    </div>
  )
}
export default Inicio;