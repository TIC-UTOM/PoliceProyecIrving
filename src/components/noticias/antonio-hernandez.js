import facebook from '../../images/facebook.png'
import twitter from '../../images/gorjeo.png'
import logopoli from '../../images/policialogo.png'


function AntonioHdz(){
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
      <section className="parrallax" id="pantalla-dividida">
      <div className="derecha">
        <h1><span class="creative">Official</span><br/>
        Antonio Hernandez
        </h1>
        </div>
      <div className="izquierda">
        <p className="historia">Este policía mexicano puede ser el más famoso de la ciudad y no solo por estar en uno de los lugares más concurridos por visitantes nacionales e Internacionales, Coyoacán, sino por haber ganado el reconocimiento y la medalla al mérito policial al incentivar, apoyar y servir al turismo al hablar 6 idiomas; español, inglés, francés, italiano, japonés y coreano. Reconoce que con voluntad nunca es tarde para aprender pues empezó sus estudios en idiomas con clases presenciales aprobadas por su comandante pero extendió sus dominios a otros idiomas estudiando en el camión cada día cuando se dirige a su trabajo, esfuerzo digno de admiración y su personalidad no acaba ahí, con muestra de sencillez invita a los jóvenes a lograr lo que si propongan terminando una de sus entrevistas con la frase: “si yo puedo ustedes también pueden, necesitamos sacar a México adelante” ejemplar.</p>
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


export default AntonioHdz;