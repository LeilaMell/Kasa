import { useNavigate } from 'react-router-dom';
import fond from '../../assets/home_background.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Data from '../../../data.json'

function Home() {
  const navigate = useNavigate();  // Initialiser navigate

  const handleCardClick = (id) => {
    navigate(`/fiche/${id}`);
  }

  return (
    <div className='main'>
      <Header/>
      <div className='home content'>
        <div className="top">
          <img src={fond} className="home_background" alt="fond paysage" />
          <p>Chez vous, partout et ailleurs</p>
        </div>
        <div className="gallery">
          {Data.map((item) => (
            <div className="card" key={item.id} onClick={() => handleCardClick(item.id)}>
              <img src={item.cover} alt={item.title} className="card-image" />
              <div className="card-overlay">
                <p className="card-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;