import react from 'react';
import '../styles/inicio.css'
import oficial1 from '../images/policia1.jpg'
import oficial2 from '../images/policia2.jpg'

function Inicio() {
  return (
      <div className="banner-container">
          <nav className="header-nav">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="ojdana/*">Guardians</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="policias.js">Districts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><img src="https://mpdcdn.azureedge.net/images/badge.png" alt="Logo Policia" height="138" width="98"/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Source</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resourses</a>
            </li>
          </ul>
          </nav>

        <div className='grid-container'>
          <h1 className='banner-title' >
            <span className='parallax'>
            <span>POLICIA</span>
            </span><br/>
            <span className='parallax'>
            <span>DE</span>
            </span><br/>
            <span className='parallaxx'>
            <span>MICHOACAN</span>
            </span>
            
          </h1>

            <div className='banner-text'>
              <p>To serve and protect. Those words guide us every day and define everything we do. Always have and always will. Our mission is to provide guidance and support to the Milwaukee communities we safeguard. We serve. We protect. Plain and simple.</p>
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
              <div className="seccion-abajo">
              <h2>Compaartir tu historia</h2>
              <h2>#PoliciasDeMichacán</h2>
              <p>The mission of the Milwaukee Police Department is to serve, guide and protect the people of this city 
                every day. More often than not, we only hear one side of their stories. They aren’t household names. A 
                lot of what they do is done behind the scenes, out of the spotlight. The everyday acts of kindness and 
                compassion sometimes get overlooked or taken for granted. But if you have a story you’d like to share, 
                we’d love to hear from you. <br/>
              </p>
            </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Inicio;