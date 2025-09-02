import '../sass/forsiden.scss';
import { Link } from 'react-router-dom';
import splashImage from "../assets/img/splash-image.jpg";


function Home() {
  return (

   
    
    <section className="front-page-with-image-and-headline">
   
 <img className={"background-image"} src={splashImage} alt="backgroundimage"/>
    
    
    
    <div className='text-and-btn'>
    <h1>Landrup <span>Dans</span></h1>
    <Link to="/aktiviteter" className="btn">
      Kom i gang
    </Link>
      </div>
     

    </section>
    
  );
}

export default Home;