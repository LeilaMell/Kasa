import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Dropdown from '../../components/Dropdown';

function About() {

    return (
        <div className='main'>
            <Header />
            <div className="about content">
                <div className="cover">
                    <img src="./src/assets/about_background.png" className="home_background" alt="fond paysage" />
                </div>
                <div className="valeurs">
                    {[
                        { title: "Fiabilité", text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." },
                        { title: "Respect", text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
                        { title: "Service", text: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
                        { title: "Sécurité", text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
                    ].map((valeur, index) => (
                        
                        <div className='valeur' key={index}>
                            <span className='drop-about'><Dropdown title={valeur.title} content={valeur.text} /></span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
