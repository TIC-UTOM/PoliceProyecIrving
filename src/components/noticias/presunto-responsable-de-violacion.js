import react from "react";
import facebook from '../../images/facebook.png'
import twitter from '../../images/gorjeo.png'
import logopoli from '../../images/policialogo.png'




function Violacion(){
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
              <div className="pa-derecha-vio">
                <h1><span class="creative">Noticias</span><br/>
                Mas recientes
                </h1>
                </div>
              <div className="pa-izquierda" id="morra-fija"> 

              <div class="card text-center">
                <div class="card-header">
                  Tungareo
                </div>
                <div class="card-body">
                  <h5 class="card-title">En Tungareo, detiene Fiscalía General a presunto responsable de violación, cometido en agravio de su cuñada de 14 años</h5>
                  <p class="card-text">Tungareo, Michoacán, a 24 de julio de 2022.- Trabajos de 
                  investigación realizados por la Fiscalía General del Estado de Michoacán (FGE), 
                  permitieron la detención de un hombre, por su posible relación en el delito de Violación 
                  Agravada; ilícito perpetrado contra su cuñada de 14 años, en el municipio de Zitácuaro.
                  Se trata de Kevin  “N”, quien de acuerdo con las investigaciones, el pasado 20 de julio del presente 
                  año, sorprendió a la víctima cuando se encontraba sola en su domicilio y tras someterla, la atacó 
                  sexualmente.

                  Estos hechos fueron denunciados ante la Fiscalía Regional de Zitácuaro, que integró la Carpeta de 
                  Investigación y reunió, durante el desarrollo de las investigaciones, el agente del Ministerio datos 
                  de prueba que permitieron establecer la posible relación del investigado en la agresión, de quien 
                  solicitó orden de aprehensión que ya fue cumplimentada.

                  Kevin “N” fue presentado ante el órgano jurisdiccional que habrá de resolver su situación jurídica.

                  Con acciones contundentes, la FGE refrenda su compromiso de presentar ante los tribunales a toda persona que
                  atente contra la integridad y bienestar de la niñez michoacana.</p>
                  <a href="noticias"><button type="tenencias" class="btn btn-outline-warning">Volver</button></a>
                </div>
                <div class="card-footer text-muted">
                24 de julio de 2022
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

export default Violacion;