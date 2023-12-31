import React, { useEffect, useRef, useState } from 'react'

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null)
    
    const isInView = () =>{
    const rect = imageRef.current.getBoundingClientRect();
    
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

   // const [loading, setLoading] = useState(true);
    const [inView, setInview] = useState(false);

    useEffect(() =>{
        setInview(isInView());
        window.addEventListener('scroll', scrollHandler);
        return () =>{
            window.removeEventListener('scroll', scrollHandler);

        }

    }, []);

    const scrollHandler = () =>{
        setInview(isInView());
    }

  return (
    <img src={inView ? secondaryImg :primaryImg}  alt='' 
   ref={imageRef}/>
  );
}

export default ImageToggleOnScroll