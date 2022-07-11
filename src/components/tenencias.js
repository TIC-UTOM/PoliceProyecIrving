  import react from 'react';
  import tunga from '../images/tunga.jpg'
  import snmike from '../images/snmike.jpg'
  import facebook from '../images/facebook.png'
  import twitter from '../images/gorjeo.png'

  function Tenencias() {
      return (
          <div>
        <div className='grid-container' banner-container>
        <nav className="header-nav">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="figueroa">Policias</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tenencias</a>
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
                <span>TENENCIAS</span>
                </span><br/>
                <span className='parallax'>
                <span>DE</span>
                </span><br/>
                <span className='parallaxx'>
                <span>MARAVATIO</span>
                </span>
              </h1>

                <div className='banner-texto'>
                  <p>Maravatío esta constituido una cabecera municipal, 109 encargados del orden y 10 tenencias  y 113 comunidades.</p>
                </div>
            </div>

        </div>

        <div className="container">
          <section className="secction2">
            <div className="oficial1">
              <img
              src={tunga}
              />
              <div className="info-oficial-ojdana">
                <h2>San Pedro Tungareo</h2>
                <p>su principal actividad económica es la agricultura.</p>
                <div>
                  <button type="button" class="btn btn-outline-warning">Ver historia</button>
                </div>
              </div>
            </div>
          </section>

          <div>
            <section className="section3">
              <div className="official2">
                <img src={snmike} />
                <div className="info-oficial">
                  <h2>San Miguel Curahuango</h2>
                  <p>Su principal actividad económica es la agricultura y las artesanías.</p>
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
          <a class="nav-link" href="/"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
          <a class="nav-link" href="/"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
          </div>
      </div>
      )
  }

  export default Tenencias;