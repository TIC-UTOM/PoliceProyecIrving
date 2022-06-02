import react from 'react';
import '../styles/inicio.css'

function Inicio() {
  return (

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
          <p className='banner-text'>To serve and protect. Those words guide us every day and define everything we do. Always have and always will. Our mission is to provide guidance and support to the Milwaukee communities we safeguard. We serve. We protect. Plain and simple.</p>
        </div>
      </div>
    </div>
  )
}

export default Inicio;