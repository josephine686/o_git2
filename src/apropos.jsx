import IndexHeader from './components/indexHeader.jsx'
import IndexFooter from './components/indexFooter.jsx'
import montagne from './assets/montagne.png'
import "./styles/apropos.scss"
import MenuD from "./components/menuD.jsx"
import ImageBanner from './components/ImageBanner.jsx';

function Apropos() {
  return (
    <>
      <IndexHeader />

      <ImageBanner
        divClass="apropos-banner"
        imgClassName='img-banner-top'
        imgSrc={montagne}
        imgAlt="montagne" 
      />

      <nav className="menu">

        < MenuD
          divClassName="cardMenu"
          inputName="fiabilite"
          inputValue="Fiabilité"
          element={<p className='p-label'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
        />

        < MenuD
          divClassName="cardMenu"
          inputName="respect"
          inputValue="Respect"
          element={<p className='p-label'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
        />

        < MenuD
          divClassName="cardMenu"
          inputName="service"
          inputValue="Service"
          element={<p className='p-label'>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>}
        />

        < MenuD
          divClassName="cardMenu"
          inputName="securite"
          inputValue="Sécurité"
          element={<p className='p-label'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
        />

      </nav>
      <IndexFooter />
    </>
  )
}

export default Apropos