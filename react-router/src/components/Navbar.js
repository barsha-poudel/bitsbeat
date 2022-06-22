import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav>
            <ul className="nav-elements">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to= 'aboutus'>ABOUT US</Link>
                    </li>

                <li>
                <Link to= 'menu'>MENU</Link>
                    </li>
                <li>
                <Link to= 'contact'>CONTACT</Link>
                    </li>
            </ul>
        </nav>
    )

}
export default Navbar;