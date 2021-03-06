import facebook from '../images/facebook.png'
import twitter from '../images/gorjeo.png'


function Newss(){
    return (
        <div className="banner-container">
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
    
          <section id="pantallas-divididas">
            <div className="pa-derecha">
                  <h1><span class="creative">Noticias</span><br/>
                  Mas recientes
                  </h1>
                  </div>
                <div className="pa-izquierda"> 
                  <div class="card text-center">
                    <div class="card-header">
                    Noticias
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Denuncian asaltos en central de Autobuses de Maravat??o</h5>
                      <p class="card-text">Maravat??o, Michoac??n.- Mediante redes sociales se han difundido presuntos asaltos en la Central de Autobuses de Maravat??o.
                      Se indica que la forma de operar de los presuntos ladrones es manchando de mostaza a sus v??ctimas y se ofrecen a ayudar a limpiarla por lo que la llevan a los ba??os en donde finalmente los despojan de dinero.
                      </p>
                    </div>
                    <div class="card-footer text-muted">
                    20 agosto, 2021
                  </div>
                </div>
            </div>
          </section>
                <div className="footer">
                    <a class="nav-link" href="/"><img src="https://laextra.mx/wp-content/uploads/2016/04/Polici%CC%81a-Federal-PF.png" alt="Logo Policia" height="150" width="200"/></a>
                    <a class="nav-link" href="https://www.facebook.com/Pagina-de-prueba-103029978258656/?ref=pages_you_manage"><img src={facebook} alt="Logo Policia" height="30" width="30"/></a>
                    <a class="nav-link" href="https://twitter.com/Irvinphantom"><img src={twitter} alt="Logo Policia" height="30" width="30"/></a>
                    <p><a href="/">Policia de Michoac??n</a> ?? 2022. <a href="ojdana/*" target="_blank">Terminos y Condiciones</a></p>
                  </div>
        </div>

  )
}


export default Newss;