    import react from 'react';
    import '../styles/figueroa.css';
    import oficial1 from '../images/policia1.jpg'
    import oficial2 from '../images/policia2.jpg'
    import facebook from '../images/facebook.png'
    import twitter from '../images/gorjeo.png'

    function Policiafigueroa() {
      return (
        <div>
          <div className='banner-containers'>
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

                <div className='div-posicionado'>
                  <h1 className='banner-titlee' >
                    <span className='parallax'>
                    <span>CONOCE </span>
                    </span>
                    <span className='parallax'>
                    <span>NUESTROS </span>
                    </span>
                    <span className='parallaxx'>
                    <span>POLICIAS</span>
                    </span>
                  </h1>
                    <div className='banner-texto'>
                      <p className='texto-descrip'>La Misión de la Policía Auxiliar es proteger la integridad física, los bienes, valores, mercancías de los particulares, empresarios, así como de las instituciones públicas y privadas de quienes contratan nuestros servicios dentro del límite territorial del estado de Michoacán, mediante los servicios de protección.</p>
                    </div>
                </div>
          </div>

            <section className="parrallax" id="pantalla-dividida">
              <div className="derecha">
                <h1><span class="creative">Official</span><br/>
                Antonio Hernandez
                </h1>
                </div>
              <div className="izquierda">
                <p className="info">Apenas dos meses después de graduarse de la Academia de Policía, el official Hernandez y su Oficial de Entrenamiento de Campo respondieron una llamada de violencia doméstica que amenazaba su vida. No solo para la víctima, sino también para los oficiales.</p>
                <div>
                <a href="new"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
            </section>

            <section className="parrallax" id="pantalla-dividida2">
              <div className="izquierdas">
              <p>After finishing his shift, Officer Figueroa was on his way home when he noticed a man standing on an overpass bridge. Compelled to do the right thing, Officer Figueroa stopped to provide a helping hand.</p>
              <div>
              <a href="new"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
              <div className="derechas">
              <h1>
                <span class="creative">Official</span><br/>
                Leticia Lopez
              </h1>
              </div>
            </section>

            <section className="parrallax" id="pantalla-dividida3">
              <div className="derecha">
              <h1><span class="creative">Official</span><br/>
              Luis Estrada
              </h1>
              </div>
              <div className="izquierda">
                <p className="info">Apenas dos meses después de graduarse de la Academia de Policía, el official Hernandez y su Oficial de Entrenamiento de Campo respondieron una llamada de violencia doméstica que amenazaba su vida. No solo para la víctima, sino también para los oficiales.</p>
                <div>
                <a href="new"><button type="tenencias" class="btn btn-outline-warning">Ver historia</button></a>
                </div>
              </div>
            </section>

          <div className="footer">
            <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
            <a class="nav-link" href="https://www.facebook.com/Pagina-de-prueba-103029978258656/?ref=pages_you_manage"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
            <a class="nav-link" href="https://twitter.com/Irvinphantom"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
            <p><a href="/">Policia de Michoacán</a> © 2022. <a href="ojdana/*" target="_blank">Terminos y Condiciones</a></p>
          </div>
        </div>
      )
    }
    export default Policiafigueroa;