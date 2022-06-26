import react from 'react';
import '../styles/figueroa.css';
import oficial2 from '../images/guardian_02_1600x1650.jpg'

function Policiafigueroa() {
  return (
    <section className="section3">
      <div className="official2">
        <img
        src={oficial2}
        />
        <div className="info-oficial">
          <h2>
          <span>Official</span><br/>
          Leticia Lopez
          </h2>
          <p>After finishing his shift, Officer Figueroa was on his way home when he noticed a man standing on an overpass bridge. Compelled to do the right thing, Officer Figueroa stopped to provide a helping hand.</p>
          <div>
            <a>See Her Story</a>
          </div>
        </div>  
      </div>
    </section>
  )
}
export default Policiafigueroa;