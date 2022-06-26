import react from 'react';
import '../styles/ojdana.css';
import oficial1 from '../images/policia1.jpg'

function Policias() {
  return (
    <section className="secction2">
      <div className="oficial1">
        <img
        src={oficial1}
        />
        <div className="info-oficial-ojdana">
          <h2>
            <span>Official</span><br/>
            Anna Ojdana
          </h2>
          <p className="info-poli">Barely two months after graduating from the Police Academy, Officer Ojdana and her Field Training Officer answered a life-threatening domestic violence call. Not just for the victim, but for the officers as well.</p>
          <div>
            <a>See Her Story</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Policias;