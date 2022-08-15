import facebook from '../../images/facebook.png'
import twitter from '../../images/gorjeo.png'
import logopoli from '../../images/policialogo.png'


function LetiLopez(){
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
          <section className="parrallax" id="pantalla-dividida2">
              <div className="izquierdas">
              <p className="historia">Poder femenino al servicio de la ciudadanía. Esta elemento de la 
              corporación se ha ganado el reconocimiento de sus compañeros por haber 
              rescatado a una víctima de secuestro enfrentando a los delincuentes, y tal como lo relata. 
              Se percató de una camioneta de lujo que daba una vuelta prohibida por lo 
              que solicitó el apoyo de su compañero de transito quien le marcó el alto para proceder con
               la infracción, al mismo tiempo que Ana inspeccionaba la camioneta, hasta que de pronto 
               escuchó a alguien pidiendo auxilio desde el asiento trasero donde encontró a una persona 
               ahorcando a la víctima para que no hiciera ruido, en cuanto se vieron descubiertos los 
               delincuentes emprendieron la huida. Mientras tanto con pistolas desenfundadas apuntaban 
               hacia ella detonando en varias ocasiones, ella al repeler la agresión los hiere, se logra 
               la detención de los dos secuestradores y el rescate de la víctima, es importante resaltar 
               el valor que tuvo Ana para enfrentarse a dos delincuentes que sin temor de aumentar el 
               número de policías asesinados le disparaban desde el vehículo, sin duda un ejemplo de 
               lealtad a sus valores que heredó de su padre que también es policía, sin duda una mujer 
               con mucho sentido humano que obtuvo un merecido ascenso en su carrera policial.</p>
              <div>
              <a href="policias"><button type="tenencias" class="btn btn-outline-warning">Volver</button></a>
                </div>
              </div>
              <div className="derechas">
              <h1 className="nombres">
                <span class="creative">Official</span><br/>
                Leticia Lopez
              </h1>
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


export default LetiLopez;