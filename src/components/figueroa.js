  import react from 'react';
  import '../styles/figueroa.css';
  import oficial1 from '../images/policia1.jpg'
  import oficial2 from '../images/policia2.jpg'
  import facebook from '../images/facebook.png'
  import twitter from '../images/gorjeo.png'

  function Policiafigueroa() {
    return (
      <div>
        <div className='grid-container' banner-container>
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
                <a class="nav-link" href="#">Source</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Resourses</a>
              </li>
            </ul>
          </nav>

              <div>
                <h1 className='banner-titulo' >
                  <span className='parallax'>
                  <span>CONOCE</span>
                  </span><br/>
                  <span className='parallax'>
                  <span>NUESTROS</span>
                  </span><br/>
                  <span className='parallaxx'>
                  <span>POLICIAS</span>
                  </span>
                </h1>
                  <div className='banner-texto'>
                    <p>La Misión de la Policía Auxiliar es proteger la integridad física, los bienes, valores, mercancías de los particulares, empresarios, así como de las instituciones públicas y privadas de quienes contratan nuestros servicios dentro del límite territorial del estado de Michoacán, mediante los servicios de protección.</p>
                  </div>
              </div>
        </div>


          <section id="pantalla-dividida">
            <div className="derecha">
            <h1><span class="creative">Official</span><br/>
            Antonio Hernandez
            </h1>
            </div>
            <div className="izquierda">
              <p className="info">Apenas dos meses después de graduarse de la Academia de Policía, el official Hernandez y su Oficial de Entrenamiento de Campo respondieron una llamada de violencia doméstica que amenazaba su vida. No solo para la víctima, sino también para los oficiales.</p>
              <div>
                <button type="button" class="btn btn-outline-warning">Ver historia</button>
              </div>
            </div>
          </section>

          <section id="pantalla-dividida">
            <div className="izquierda"></div>
            <div className="derecha">
            <h1>
              <span>Official</span><br/>
              Leticia Lopez
            </h1>
              <p>After finishing his shift, Officer Figueroa was on his way home when he noticed a man standing on an overpass bridge. Compelled to do the right thing, Officer Figueroa stopped to provide a helping hand.</p>
              <div>
                <button type="button" class="btn btn-outline-warning">Ver historia</button>
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
  export default Policiafigueroa;