import "./Navbar.css";
import { NavLink } from "react-router-dom";

// 2 - Link com react router

const Navbar = () => {
  return (
    <nav>

        {/*<Link to="/">Home</Link>
        <Link to="/About">Sobre</Link>*/}
<NavLink to='/'>Home</NavLink>
<NavLink to='/about'>Sobre</NavLink>

    </nav>
  )
};

export default Navbar