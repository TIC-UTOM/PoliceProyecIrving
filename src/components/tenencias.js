  import react from 'react';
  import tunga from '../images/tunga.jpg'
  import snmike from '../images/snmike.jpg'
  import facebook from '../images/facebook.png'
  import twitter from '../images/gorjeo.png'

  function Tenencias() {
      return (
        <div>
          <div className='banner-container'>
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

                <div className='div-posicionado'>
                  <h1 className='banner-title' >
                    <span className='parallax'>
                    <span>TENECIAS </span>
                    </span>
                    <span className='parallax'>
                    <span>DE </span>
                    </span>
                    <span className='parallaxx'>
                    <span>MARAVATIO</span>
                    </span>
                  </h1>
                    <div className='banner-texto'>
                      <p>Maravatío esta constituido una cabecera municipal, 109 encargados del orden y 10 tenencias y 113 comunidades.</p>
                    </div>
                </div>
          </div>

        <div className="policia-hdz">
            <img
            src={tunga}
            />
            <div className="info-policiahdz">
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

            <div className="policia-lopez">
              <img src={snmike} />
              <div className="info-policialopez">
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
        <div className="footer">
          <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
          <a class="nav-link" href="/"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
          <a class="nav-link" href="/"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
          </div>
      </div>
      )
  }

  export default Tenencias;