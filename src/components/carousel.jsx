import { useParams } from "react-router-dom"
import datas from '../datas/datas.jsx'
import { useState } from "react"
import flecheDroite from "../assets/CarouDroite.png"
import flecheGauche from "../assets/CarouGauche.png"

function Carousel() {
    const param = useParams()
    const img = datas.find(data => data.id == param.id)

    const imgCarou = img.pictures

    const [index, setIndex] = useState(0)


    function carouIndexAdd() {
        if (index < imgCarou.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    

    function carouIndexRemove() {
        if (index <= 0) {
            setIndex(imgCarou.length - 1)
        } else {
            setIndex(index - 1)
        }
    }


    return <>

        <img onClick={carouIndexAdd} className="flecheCarouDroite" src={flecheDroite} alt="" />

        <img className="img-carous" src={imgCarou[index]} alt={"images logements carousel"} key={imgCarou[index]} />

        <img onClick={carouIndexRemove} className="flecheCarouGauche" src={flecheGauche} alt="" />

        <p className="counterCarou">{index +1} / {imgCarou.length}</p>

    </>
}

export default Carousel
