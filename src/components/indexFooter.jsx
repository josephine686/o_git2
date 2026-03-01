import { useState } from 'react'
import '../styles/indexFooter.scss'
import logoBlanc from '../assets/LOGOF.svg'


function indexFooter() {

    return (
        <div className="indexFooter">
            <div className="logo">
                <img src={logoBlanc} alt="logo" />
            </div>
            <div className="footerTxt">
                <p className="txtFooter">© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )

}

export default indexFooter