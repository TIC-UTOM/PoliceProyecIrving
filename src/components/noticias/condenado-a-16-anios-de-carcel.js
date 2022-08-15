import react from "react";
import facebook from '../../images/facebook.png'
import twitter from '../../images/gorjeo.png'
import logopoli from '../../images/policialogo.png'




function Condenado(){
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
              <div className="pa-derecha-anios">
                <h1><span class="creative">Noticias</span><br/>
                Mas recientes
                </h1>
                </div>
              <div className="pa-izquierda" id="morra-fija"> 

              <div class="card text-center">
                <div class="card-header">
                  San Miguel Curahuango
                </div>
                <div class="card-body">
                  <h5 class="card-title">En San Miguel, detiene Fiscalía General a presunto responsable de violación, cometido en agravio de su cuñada de 14 años</h5>
                  <p class="card-text">Zitácuaro, Michoacán.- La Fiscalía General del Estado de Michoacán (FGE) obtuvo mediante 
                  procedimiento abreviado, sentencia condenatoria de 16 años y ocho meses de prisión, así como pago por reparación 
                  del daño contra Francisco «N», por su responsabilidad en el delito de Violación Agravada, ilícito perpetrado contra 
                  su sobrina de 13 años edad.

                  De acuerdo con las constancias que forman parte de la Carpeta de Investigación, el 9 de noviembre de 2017, el ahora sentenciado le 
                  indicó a la agraviada que le subiera un material que ocupaba en la azotea de su domicilio, momento que fue aprovechado por el investigado 
                  para atacarla sexualmente.

                  Por estos hechos, la Fiscalía Regional de Zitácuaro emprendió los actos de investigación respectivos que permitieron establecer la posible 
                  participación del investigado en el delito, de quien solicitó orden de aprehensión que en su momento fue cumplimentada por personal de la 
                  institución.

                  Una vez satisfechos los requisitos establecidos en el Código Nacional de Procedimientos Penales, se solicitó la apertura del procedimiento 
                  abreviado, mediante el cual el órgano jurisdiccional resolvió sentenciar a Francisco «N» a 16 años y ocho meses de prisión, así como al pago 
                  por concepto de reparación del daño, por su responsabilidad en el delito de Violación Agravada.

                  El procedimiento abreviado es una forma de terminación anticipada del proceso, que consiste en el reconocimiento del imputado en su
                  participación en el hecho delictivo y como consecuencia, se valora la pertinencia de reducir en un margen acotado, la sanción que se 
                  impondrá.</p>
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

export default Condenado;