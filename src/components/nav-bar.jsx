import '../sass/nav-bar.scss';
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';




function Navbar() {
 

  return (
    <>
    <nav className="navbar">

			<Link to="/aktiviteter">
			<div className='icon-wrapper'>
				<CiHome />
				</div>
			</Link>

            <Link to="/søgeside">
			<div className='icon-wrapper'>
				<CiSearch />
			</div>	
			</Link>
			
			<Link to="/kalender-default">
			<div className='icon-wrapper'>
				<CiCalendar />
			</div>
			</Link>
		</nav>
    </>
  )
}

export default Navbar







