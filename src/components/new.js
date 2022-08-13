import facebook from '../images/facebook.png'
import twitter from '../images/gorjeo.png'
import logopoli from '../images/policialogo.png'


function News(){
  return (
    <div className="banner-container">
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
                  <a class="nav-link" href="/"><img src={logopoli} alt="Logo Policia" height="150" width="150" /></a>
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
      <section className="parrallax" id="pantalla-dividida">
      <div className="derecha">
        <h1><span class="creative">Official</span><br/>
        Antonio Hernandez
        </h1>
        </div>
      <div className="izquierda">
        <p className="info">Apenas dos meses después de graduarse de la Academia de Policía, el official Hernandez y su Oficial de Entrenamiento de Campo respondieron una llamada de violencia doméstica que amenazaba su vida. No solo para la víctima, sino también para los oficiales.</p>
      </div>
      </section>
      <div className="footer">
            <a class="nav-link" href="/"><img src={logopoli} alt="Logo Policia Michoacan" height="150" width="200"/></a>
            <a class="nav-link" href="https://www.facebook.com/Pagina-de-prueba-103029978258656/?ref=pages_you_manage"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
            <a class="nav-link" href="https://twitter.com/Irvinphantom"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
            <p><a href="/">Policia de Michoacán</a> © 2022. <a href="ojdana/*" target="_blank">Terminos y Condiciones</a></p>
          </div>
    </div>

  )
}


export default News;