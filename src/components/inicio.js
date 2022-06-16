import react from 'react';
import '../styles/inicio.css'

function Inicio() {
  return (
      <div className="banner-container">
        <nav className="header-nav">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="figueroa/*">Guardians</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="policias.js">Districts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><img src="https://mpdcdn.azureedge.net/images/badge.png" alt="Logo Policia" height="138" width="98"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Source</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resourses</a>
          </li>
        </ul>
        </nav>

      <div className='grid-container'>
        <h1 className='banner-title' >
          <span className='parallax'>
          <span>WE ARE </span>
          </span><br/>
          <span className='parallax'>
          <span>THE </span>
          </span><br/>
          <span className='parallaxx'>
          <span>GUARDIANS</span>
          </span>
          
        </h1>

        <div className='banner-text'>
          <p>To serve and protect. Those words guide us every day and define everything we do. Always have and always will. Our mission is to provide guidance and support to the Milwaukee communities we safeguard. We serve. We protect. Plain and simple.</p>
        </div>
      </div>
    </div>
  )
  
}
export default Inicio;