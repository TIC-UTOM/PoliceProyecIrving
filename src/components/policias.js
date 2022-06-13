import react from 'react';
import '../styles/policias.css';
import oficial1 from '../images/guardian_01_2000x900.jpg'

function Policias() {
  return (
    <section className="secction2">
      <div className="oficial1">
        <img
        src={oficial1}
        />
        <div className="info-oficial">
          <h2>
            <span>Official</span><br/>
            Anna Ojdana
          </h2>
          <p>Barely two months after graduating from the Police Academy, Officer Ojdana and her Field Training Officer answered a life-threatening domestic violence call. Not just for the victim, but for the officers as well.</p>
          <div>
            <a>See Her Story</a>
          </div>
        </div>
      </div>
      
      <div className="oficial2">
      <img
        src={oficial1}
        />
        <div className="info-oficial-2">
          <h2>
            <span>Official</span><br/>
            Anna Ojdana
          </h2>
          <p>Barely two months after graduating from the Police Academy, Officer Ojdana and her Field Training Officer answered a life-threatening domestic violence call. Not just for the victim, but for the officers as well.</p>
          <div>
            <a>See Her Story</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Policias;