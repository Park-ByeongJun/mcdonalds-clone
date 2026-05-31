import { Link } from "react-router-dom";
import logo from '../image/hambugiLogo.png';
import '../css/header.css'

function Header() {

    return(
        <header className="header">
            <Link to="/">
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <Link to="/board">NEW</Link>
            <Link to="/board">MENU</Link>
            <Link to="/board">COUPON</Link>
            <Link to="/board">Q&A</Link>
        </header>
    );
}

export default Header;