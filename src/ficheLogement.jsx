import { useParams, useNavigate } from "react-router-dom"
import IndexHeader from './components/indexHeader.jsx'
import IndexFooter from './components/indexFooter.jsx'
import './styles/ficheLogement.scss'
import datas from './datas/datas.jsx'
import Carousel from "./components/carousel.jsx"
import Notes from './components/notes.jsx'
import { useEffect } from "react"
import MenuD from "./components/menuD.jsx"


function FicheLogement() {

    const param = useParams()
    const affichageLogement = datas.find(data => data.id == param.id)
    const navigate = useNavigate()

    useEffect(() => {
        if (!affichageLogement) {
            navigate("/404")
        }
    }, [])


    console.log(affichageLogement);
    console.log(param);

    function equipementLogement() {
        const equipements = affichageLogement.equipments

        return equipements.map((equipement) => (
            <p className='p-label' key={equipement}>{equipement}</p>
        ))
    }

    function tagsLogement() {
        const tags = affichageLogement.tags

        return tags.map((tag) => (
            <p className='logement-tag' key={tag}>{tag}</p>
        ))

    }


    if (!affichageLogement) {
        return null
    }

    return (
        <>
            <IndexHeader />

            <div className="logement">
                <div className="img-logement">

                    <Carousel />

                </div>
            </div>

            <div className="logement-content">
                <div className="logement-b1">
                    <div className="info-localisation">
                        <h1 id='logement-name'>{affichageLogement.title}</h1>
                        <h2 id='logement-ville'>{affichageLogement.location}</h2>
                    </div>

                    <div className="logement-tags">

                        {tagsLogement()}

                    </div>
                </div>

                <div className="logement-b2">
                    <div className="logement-proprietaire">
                        <div className="proprietaire-name">
                            <h3 className="proprietaire-info">{affichageLogement.host.name}</h3>
                        </div>
                        <img src={affichageLogement.host.picture} alt="photo proprietaire" />
                    </div>
                    <div className="logement-rating">

                        <Notes />

                    </div>
                </div>
            </div>

            <div className="logement-b3">

                < MenuD
                    divClassName="desc"
                    inputName="desc"
                    inputValue="Description"
                    element={
                        <p className='p-description'>

                            {affichageLogement.description}

                        </p>
                    }
                />

                < MenuD
                    divClassName="presta"
                    inputName="presta"
                    inputValue="Équipements"
                    element={
                        <div className="p-equipement">

                            {equipementLogement()}

                        </div>
                    }
                />



 {/*                <div className="desc">
                    <input type="checkbox" name="desc" id="desc" />
                    <label htmlFor="desc">Description</label>
                    <p className='p-description'>

                        {affichageLogement.description}

                    </p>
                </div>

                <div className="presta">
                    <input type="checkbox" name="presta" id="presta" />
                    <label htmlFor="presta">Équipements</label>

                    <div className="p-equipement">

                        {equipementLogement()}

                    </div>
                </div> */}


            </div>

            <IndexFooter />
        </>
    )
}

export default FicheLogement