import { Routes, Route } from "react-router-dom"
import Index from "./index.jsx"
import NotFound from "./notfound.jsx"
import Apropos from "./apropos.jsx"
import Logement from "./ficheLogement.jsx"


function App() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App