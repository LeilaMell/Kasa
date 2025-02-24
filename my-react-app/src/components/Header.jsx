import { Link } from "react-router-dom";
import '../style/main.scss'
import kasalogo from '../assets/LOGO.svg'

function Header(){

    return(
        <div className='Header'>
            <img src={kasalogo} className="logo kasa" alt="kasa logo" />
            <nav className='Header-nav'>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header