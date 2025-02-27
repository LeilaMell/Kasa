import { useParams } from 'react-router-dom';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrousel from '../../components/Carrousel';
import Data from '../../../data.json'
import Dropdown from '../../components/Dropdown'
import Error from '../Error'

function Fiche(){
    const { id } = useParams(); 
    const item = Data.find((item) => item.id === id);

    if (!item) {
        return <Error />;
      }

    return(
        <div className="main">
            <Header />
            <div className="fiche content">
                <Carrousel />
                <div className='info'>
                    <div className='title-location-tag'>
                        <h2>{item.title}</h2>
                        <h3>{item.location}</h3>
                        <div className="tags">
                            {item.tags.map((tag, index) => (
                                <p key={index} className="tag">{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className='host-rating'>
                        <div className='host'>
                            <p>{item.host.name}</p>
                            <div className='host-img-contenant'>
                                <img src={item.host.picture} alt={item.host.name} className="host-image" />
                            </div>
                        </div>
                        <div className="rating">
                            {[...Array(5)].map((_, index) => (
                                <i 
                                key={index} 
                                className={`fa-solid fa-star ${index < item.rating ? "filled" : "empty"}`}
                                ></i>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='description-equipements'>
                    <span className='drop-fiche'><Dropdown title="Description " content={item.description} /></span>
                    <span className='drop-fiche'><Dropdown title="Équipements " content={item.equipments} /></span>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Fiche;