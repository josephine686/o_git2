import './styles/indexHeader.scss'
import './styles/indexBody.scss'
import IndexHeader from './components/indexHeader.jsx'
import IndexBody from './components/indexBody.jsx'
import IndexFooter from './components/indexFooter.jsx'

function Index() {
  return (
    <>
      <IndexHeader />
      <IndexBody />
      <IndexFooter />
    </>
  )
}

export default Index