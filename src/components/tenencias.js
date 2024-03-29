  import react from 'react';
  import '../styles/tenencias.css'
  import tunga from '../images/tunga.jpg'
  import snmike from '../images/snmike.jpg'
  import uripitio from '../images/Uripitio.jpg'
  import facebook from '../images/facebook.png'
  import twitter from '../images/gorjeo.png'
  import logopoli from '../images/policialogo.png'
  import { tabTitle } from '../utils/GeneralFunctions';

  function Tenencias() {
    tabTitle('Tenencias');
    return (
      <div className="banner-containerr">
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
          <span>TENENCIAS DE MARAVATIO</span>
          </span>
        </h1>
          <div>
            <p className='texto-informativo'>Maravatío esta constituido una cabecera municipal, 109 encargados del orden y 10 tenencias  y 113 comunidades</p>
          </div>
      </div>

          <div className="policia-hdz">
            <img src={tunga} />
            <div className="info-policiahdz">
              <h2>
                <span class="creativa">Tenencia de </span><br/>
                San Pedro Tungareo
              </h2>
              <p>su principal actividad económica es la agricultura.</p>
              <div>
              <a href="noticias"><button type="tenencias" class="btn btn-outline-warning">Ver mas</button></a>
              </div>
            </div>
          </div>

            <div className="policia-lopez">
              <img src={snmike} />
              <div className="info-policialopez">
                <h2>
                <span class="creativa">Tenecia de</span><br/>
                San Miguel Curahuango
                </h2>
                <p>Su principal actividad económica es la agricultura y las artesanías.</p>
                <div>
                <a href="noticias"><button type="tenencias" class="btn btn-outline-warning">Ver mas</button></a>
                </div>
              </div>
            </div>

            <div className="policia-estrada">
              <img src={uripitio} />
              <div className="info-policia-estrada">
                <h2>
                <span class="creativa">Tenecia de </span><br/>
                Uripitio
                </h2>
                <p>su principal actividad económica es la artesanal y la agricultura.</p>
                <div>
                <a href="noticias"><button type="tenencias" class="btn btn-outline-warning">Ver mas</button></a>
                </div>
              </div>
            </div>

            <div className="seccion-abajoo">
              <h2>Principal actividad económica</h2>
              <p className="tecto-final">La principal actividad económica de Maravatío es agrícola mediante la producción de fresa contribuye a que Michoacán sea el producto número uno de de este fruto, también se produce maíz, frijol, trigo, pera, tomate y hortalizas.<br/>
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
  export default Tenencias;