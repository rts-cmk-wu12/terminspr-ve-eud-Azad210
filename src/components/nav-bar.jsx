import '../sass/nav-bar.scss';
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";




function Navbar() {
 

  return (
    <>
    <nav className="">
			<Link to="/aktiviteter">
				<CiHome />
			</Link>

            <Link to="/søgeside">
				<CiSearch />
			</Link>
			
			<Link to="/">
				<CiCalendar />

			</Link>
		</nav>
    </>
  )
}

export default Navbar







