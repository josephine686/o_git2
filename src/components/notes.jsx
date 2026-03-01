import { useParams } from "react-router-dom";
import datas from "../datas/datas";
import star from "../assets/star.svg"
import starV from "../assets/starVide.svg"


function Notes() {
    const param = useParams()
    const dataR = datas.find(data => data.id == param.id)
    let fullRating = 5;
    let ratingValue = 0
    let starPush =[]

    console.log(dataR.rating)

    if(!dataR.rating){
        return null
    }

    for (let i = 0; i < dataR.rating; i++) {
        starPush.push(<img src={star} key={starPush.length} alt="etoile ratting" />)
    }

    ratingValue = fullRating - dataR.rating

    for (let i = 0; i < ratingValue; i++) {
        starPush.push(<img src={starV} key={starPush.length} alt="etoile ratting vide" />)
    }

    return(starPush)

    /*     switch (dataR.rating) {
            case "0":
                return(
                <div className="ratting">
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                </div>)
    
                break;
    
            case "1":
                return(
                <div className="ratting">
                    <img src={star} alt="etoile ratting" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                </div>)
    
                break;
            case "2":
                return(
                <div className="ratting">
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                </div>)
    
    
                break;
            case "3":
                return(
                <div className="ratting">
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={starV} alt="etoile ratting vide" />
                    <img src={starV} alt="etoile ratting vide" />
                </div>)
    
    
                break;
            case "4":
                return(
                <div className="ratting">
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={starV} alt="etoile ratting vide" />
                </div>)
    
    
                break;
            case "5":
                return(
                <div className="ratting">
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                    <img src={star} alt="etoile ratting" />
                </div>)
    
    
                break;
    
            default:
                break;
        } */


}

export default Notes