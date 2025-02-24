import { useParams } from 'react-router-dom';
import { useState } from "react";
import Data from '../../data.json'

function Carrousel(){
    const { id } = useParams(); 
    const item = Data.find((item) => item.id === id);

    const pictures = item.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
    };
    return(
            <div className='Carrousel'>
              {pictures.length > 1 && (
                  <>
                  <button className="prev" onClick={prevImage}><i className="fa-solid fa-chevron-left"></i></button>
                  <button className="next" onClick={nextImage}><i className="fa-solid fa-chevron-right"></i></button>
                  </>
              )}
                  <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" /> 
              <div className="carousel-counter">
                {pictures.length > 1 && (
                  <span>{currentIndex + 1} / {pictures.length}</span>
                )}
              </div>

            </div>
            
)
}
export default Carrousel