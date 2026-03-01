function ImageBanner ({divClass,imgClassName, imgSrc,imgAlt, element}){
    return(
        <div className={divClass}>
            <img className={imgClassName} src={imgSrc} alt={imgAlt} />
            {element}
        </div>
    )
}

export default ImageBanner