import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router';

function Error(){
    return(
        <div className='main'>
            <Header/>
            <div className="error content">
                <p className="err">404</p>
                <p className="oups">Oups! La page que vous demandez n&apos;existe pas.</p>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </div>
            <Footer />
        </div>
    )
}
export default Error;