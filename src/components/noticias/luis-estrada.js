import facebook from '../../images/facebook.png'
import twitter from '../../images/gorjeo.png'
import logopoli from '../../images/policialogo.png'


function LuisEstr(){
  return (
    <div className="banner-contain">
          <nav class="navbar navbar-expand-sm navbar-light justify-content-center">
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
      <section className="parrallax" id="pantalla-dividida3">
      <div className="derecha">
        <h1><span class="creative">Official</span><br/>
        Luis estrada
        </h1>
        </div>
      <div className="izquierda">
        <p className="historia">Con una historia más tranquila pero no por eso menos admirable, este 
        policía bancario se ha ganado su renombre entre los vecinos cercanos a una plaza comercial 
        de la Ciudad de México, donde un día normal en uno de sus rondines recurrentes, se dio cuenta 
        de que en el estacionamiento de dicha plaza había una bolsa procedente de una tienda de prestigio 
        y que mediante protocolos asignados por la corporación procedió a levantarla para examinarla y 
        reportarla con intensión de que fuera reconocida por el dueño, y al notar que entre la ropa había 
        dinero jamás se vio tentado a tomar alguno de los billetes que sumaban más de 42 mil pesos que 
        regresó a su dueño sin esperar ni solicitar recompensa alguna a pesar de ganar $7,000 al mes. 
        Es una persona con dotes de sencillez y metas muy claras: quiere inscribirse a la escuela en 
        nivel medio superior, terminar la prepa para que con su esfuerzo, lealtad y honestidad pueda 
        llegar a ser capitán y brindarle a su familia una vida digna tal como él lo expresa.</p>
        <div>
              <a href="policias"><button type="tenencias" class="btn btn-outline-warning">Volver</button></a>
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


export default LuisEstr;