import '../styles/indexBody.scss'
import plage from '../assets/plage.png'
import datas from '../datas/datas.jsx'
import { Link } from 'react-router-dom';
import ImageBanner from './ImageBanner.jsx';


function IndexBody() {

    function CardIndex() {

        return datas.map(data => (

            <Link key={data.id} to={`/Logement/${data.id}`} className="card-link">
                <div className="card">
                    <img src={data.cover} alt={data.title} />
                    <p className='grid-txt'>{data.title}</p>
                </div>
            </Link>

        ));
    }


    return (
        <>

        <ImageBanner
        divClass="top-body-index"
        imgClassName="img-index-top"
        imgSrc={plage}
        imgAlt="plage"
        element={
            <h1>Chez vous, partout et ailleurs</h1>
        }
        />

{/*             <div className="top-body-index">
                <h1>Chez vous, partout et ailleurs</h1>
                <img className='img-index-top' src={plage} alt="plage" />
            </div> */}

            <div className="grid-container">
                <div className="grid">  
                    {CardIndex()}
                </div>
            </div>
        </>
    )
}

export default IndexBody