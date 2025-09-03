import '../sass/søgeside.scss';
import Navbar from '../components/nav-bar';
import { SearchBar } from '../components/searchbar';




function Søgeside() {
 

  return (
    <>
    <section>
    <h2>Søg</h2>

    <SearchBar />
    </section>  
     <Navbar />
    </>
  )
}

export default Søgeside