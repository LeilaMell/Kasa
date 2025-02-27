import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home/'
import About from './pages/About/'
import Fiche from './pages/Fiche/'
import Error from './pages/Error/'


function App() {
    return (
      <Router>
        <Routes>
          {/* Routes avec Layout */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="fiche/:id" element={<Fiche />} />
          
  
          {/* Route pour la page 404 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  