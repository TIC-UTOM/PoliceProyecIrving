import react from "react";
import facebook from '../../images/facebook.png'
import twitter from '../../images/gorjeo.png'
import logopoli from '../../images/policialogo.png'



function Asaltos(){
  return (
    <div className="banner-contain">
      <nav class="navbar navbar-expand-lg  navbar-light">
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

      <section id="pantallas-divididas">
              <div className="pa-derecha-bus">
                <h1><span class="creative">Noticias</span><br/>
                Mas recientes
                </h1>
                </div>
              <div className="pa-izquierda" id="morra-fija"> 

              <div class="card text-center">
                <div class="card-header">
                Maravatio de Ocampo
                </div>
                <div class="card-body">
                  <h5 class="card-title">Denuncian asaltos en central de Autobuses de Maravatío</h5>
                  <p class="card-text">Maravatío, Michoacán.- Mediante redes sociales se han difundido
                   presuntos asaltos en la Central de Autobuses de Maravatío.<br/>
                   Maravatío, Michoacán.- Mediante redes sociales se han difundido presuntos asaltos en la Central de Autobuses de Maravatío.<br/>
                   Se indica que la forma de operar de los presuntos ladrones es manchando de mostaza a sus víctimas y se ofrecen a ayudar a limpiarla por lo que la llevan a los baños en donde finalmente los despojan de dinero.</p>
                  <a href="noticias"><button type="tenencias" class="btn btn-outline-warning">Regresar</button></a>
                </div>
                <div class="card-footer text-muted">
                20 agosto, 2021
                </div>
              </div>
              
              </div>
            </section>
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
  )
}

export default Asaltos;