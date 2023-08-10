import React, { useRef } from 'react'

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null)
    const onMouseOver = () =>{
        imageRef.current.src = secondaryImg;

    }
    const onMouseOut = () =>{
        imageRef.current.src = primaryImg;
    }
  return (
    <img src={primaryImg} onMouseOver={onMouseOver} 
   onMouseOut={onMouseOut} alt='' 
   ref={imageRef}/>
  )
}

export default ImageToggleOnMouseOver