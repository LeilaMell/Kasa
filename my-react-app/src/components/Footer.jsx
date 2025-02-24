import '../style/main.scss'
import kasalogobw from '../assets/LOGOBW.svg'

function Footer(){

    return(
        <div className='footer'>
            <img src={kasalogobw} className="logo kasa" alt="kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer