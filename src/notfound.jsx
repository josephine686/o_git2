import IndexHeader from './components/indexHeader.jsx'
import IndexFooter from './components/indexFooter.jsx'
import './styles/notfound.scss'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <IndexHeader />
            <div className="nf404">
                <h1 className='nf-title'>404</h1>
                <p className='nf-txt'>Oups! La page que vous demandez n'existe pas.</p>
                <Link className='nf-a' to="/">Retourner sur la page d’accueil</Link>
            </div>
            <IndexFooter />
        </>
    )
}

export default NotFound