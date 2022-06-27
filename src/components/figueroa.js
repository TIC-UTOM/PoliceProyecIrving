import react from 'react';
import '../styles/figueroa.css';
import oficial1 from '../images/policia1.jpg'
import oficial2 from '../images/policia2.jpg'

function Policiafigueroa() {
  return (
    <div>
      <div className='grid-container' banner-container>
        <nav className="header-nav">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="ojdana/*">policias</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="policias.js">Tenencias</a>
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

      <div className="container">
        <section className="secction2">
          <div className="oficial1">
            <img
            src={oficial1}
            />
            <div className="info-oficial-ojdana">
              <h2>
                <span>Official</span><br/>
                Antonio Hernandez
              </h2>
              <p>Apenas dos meses después de graduarse de la Academia de Policía, el official Hernandez y su Oficial de Entrenamiento de Campo respondieron una llamada de violencia doméstica que amenazaba su vida. No solo para la víctima, sino también para los oficiales.</p>
              <div>
                <button type="button" class="btn btn-outline-warning">Ver historia</button>
              </div>
            </div>
          </div>
        </section>

        <div>
          <section className="section3">
            <div className="official2">
              <img src={oficial2} />
              <div className="info-oficial">
                <h2>
                <span>Official</span><br/>
                Leticia Lopez
                </h2>
                <p>After finishing his shift, Officer Figueroa was on his way home when he noticed a man standing on an overpass bridge. Compelled to do the right thing, Officer Figueroa stopped to provide a helping hand.</p>
                <div>
                  <button type="button" class="btn btn-outline-warning">Ver historia</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="footer">
        <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>

        </div>
    </div>
  )
}
export default Policiafigueroa;