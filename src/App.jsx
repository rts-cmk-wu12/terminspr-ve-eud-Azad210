import './sass/forsiden.scss';
import splashImage from './assets/img/splash-image.jpg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <section
      className="front-page-with-image-and-headline"
      style={{ backgroundImage: `url(${splashImage})` }}
    >
      <div>
        <h1>Dans</h1>
      </div>

      <div>
        <Link to="/aktiviteter" className="btn">
          Kom i gang
        </Link>
      </div>
    </section>
  );
}

export default Home;
