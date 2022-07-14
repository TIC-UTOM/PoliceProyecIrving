  import react from 'react';
  import tunga from '../images/tunga.jpg'
  import snmike from '../images/snmike.jpg'
  import uripitio from '../images/Uripitio.jpg'
  import facebook from '../images/facebook.png'
  import twitter from '../images/gorjeo.png'

  function Tenencias() {
    return (
      <div className="banner-containerx">
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
            <a class="nav-link" href="noticias/*">Noticias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Usuarios</a>
          </li>
        </ul>
      </nav>

      <div className='div-posicionado'>
        <h1 className='banner-title1'>
          <span>
            <span className='parallax'>TENENCIAS </span>
            </span>
            <span className='parallax'>
            <span>DE </span>
            </span>
            <span className='parallaxx'>
            <span>MARAVATIO</span>
          </span>
        </h1>

          <div className='banner-text'>
            <p className='texto-informativo'>Maravatío esta constituido una cabecera municipal, 109 encargados del orden y 10 tenencias  y 113 comunidades</p>
          </div>
      </div>

          <div className="policia-hdz">
            <img
            src={tunga}
            />
            <div className="info-policiahdz">
              <h2>
                <span class="creative">Tenencia de </span><br/>
                San Pedro Tungareo
              </h2>
              <p>su principal actividad económica es la agricultura.</p>
              <div>
              <a href="new"><button type="tenencias" class="btn btn-outline-warning">Ver mas</button></a>
              </div>
            </div>
          </div>

            <div className="policia-lopez">
              <img src={snmike} />
              <div className="info-policialopez">
                <h2>
                <span class="creative">Tenecia de ltty</span><br/>
                San Miguel Curahuango
                </h2>
                <p>Su principal actividad económica es la agricultura y las artesanías.</p>
                <div>
                <a href="new"><button type="tenencias" class="btn btn-outline-warning">Ver mas</button></a>
                </div>
              </div>
            </div>

            <div className="policia-estrada">
              <img src={uripitio} />
              <div className="info-policia-estrada">
                <h2>
                <span class="creative">Tenecia de </span><br/>
                Uripitio
                </h2>
                <p>su principal actividad económica es la artesanal y la agricultura.</p>
                <div>
                <a href="new"><button type="tenencias" class="btn btn-outline-warning">Ver mas</button></a>
                </div>
              </div>
            </div>

            <div className="seccion-abajo">
              <h2>Principal actividad económica</h2>
              <p className="tecto-final">La principal actividad económica de Maravatío es agrícola mediante la producción de fresa contribuye a que Michoacán sea el producto número uno de de este fruto, también se produce maíz, frijol, trigo, pera, tomate y hortalizas.<br/>
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
  export default Tenencias;