    import react from 'react';
    import '../styles/policias.css';
    import facebook from '../images/facebook.png'
    import twitter from '../images/gorjeo.png'
    import logopoli from '../images/policialogo.png'
    import { tabTitle } from '../utils/GeneralFunctions';

    function Policiafigueroa() {
      tabTitle('Policias');
      return (
        <div>
          <div className='banner-containerr'>
          <nav class="navbar navbar-expand-sm navbar-light justify-content-center">
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
            <span className='parallax'>CONOCE </span>
            </span>
            <span className='parallax'>
            <span>NUESTROS </span>
            </span>
            <span className='parallaxx'>
            <span>POLICIAS</span>
          </span>
        </h1>
                    <div>
                      <p className='texto-descriptivo'>La Misión de la Policía Auxiliar es proteger la integridad física, los bienes, valores, mercancías de los particulares, empresarios, así como de las instituciones públicas y privadas de quienes contratan nuestros servicios dentro del límite territorial del estado de Michoacán, mediante los servicios de protección.</p>
                    </div>
                </div>
          </div>

            <section className="parrallax" id="pantalla-dividida">
              <div className="derecha">
                <h1 className="nombres"><span class="creative">Official</span><br/>
                Antonio Hernandez
                </h1>
                </div>
              <div className="izquierda">
                <p className="info">Este policía mexicano puede ser el más famoso de la ciudad y no solo por estar en uno de los 
                lugares más concurridos por visitantes nacionales e Internacionales</p>
                <div>
                <a href="antonio-hernandez"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
            </section>

            <section className="parrallax" id="pantalla-dividida2">
              <div className="izquierdas">
              <p className="info">Poder femenino al servicio de la ciudadanía. Esta elemento se ha ganado el reconocimiento de sus compañeros por haber rescatado a una víctima de secuestro enfrentando a los delincuentes, a sus 25 años de edad...</p>
              <div>
              <a href="leticia-lopez"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
              <div className="derechas">
              <h1 className="nombres">
                <span class="creative">Official</span><br/>
                Leticia Lopez
              </h1>
              </div>
            </section>

            <section className="parrallax" id="pantalla-dividida3">
              <div className="derecha">
              <h1 className="nombres"><span class="creative">Official</span><br/>
              Luis Estrada
              </h1>
              </div>
              <div className="izquierda">
                <p className="info">Apenas dos meses después de graduarse de la Academia de Policía, el official Hernandez y su Oficial de Entrenamiento de Campo respondieron una llamada de violencia doméstica que amenazaba su vida. No solo para la víctima, sino también para los oficiales.</p>
                <div>
                <a href="luis-estrada"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
            </section>
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
      )
    }
    export default Policiafigueroa;