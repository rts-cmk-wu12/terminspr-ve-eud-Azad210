import '../sass/aktiviteter.scss';
import Navbar from '../components/nav-bar';
import { useEffect, useState } from 'react';

function Aktiviteter() {
  const [aktiviteter, setAktiviteter] = useState([]);

  useEffect(() => { 
    const hentAktiviteter = async () => { 
      const aktivRes = await fetch("http://localhost:4000/api/v1/activities");
      const data = await aktivRes.json();
      setAktiviteter(data);
    };
    hentAktiviteter();
  }, []);

  return (
    <>
      <section className='aktiviteter'>
        <h2>Aktiviteter</h2>
        <div className='aktiviteter__detatils'>
          {aktiviteter.map((aktivitet) => (
            <div className="aktiviteter__card">
              <img
                className="aktiviteter__billede"
                src={aktivitet.asset.url}
                alt={aktivitet.name}
              />
              <div className='aktiviteter__info'>
                <h3>{aktivitet.name}</h3>
                <p>{aktivitet.minAge} - {aktivitet.maxAge} år</p>
              </div>
            </div>
          ))}
        </div>
      </section>  
      <Navbar />
    </>
  )
}

export default Aktiviteter;
