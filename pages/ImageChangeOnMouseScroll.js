import React from 'react'
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'

const ImageChangeOnMouseScroll = () => {
    
  return (
    <div>
        {[1124, 187, 823, 1269, 1530].map((speakerid)=>{
            return(
            <div key={speakerid}>
            <ImageToggleOnScroll primaryImg={`/static/speakers/bw/Speaker-${speakerid}.jpg`} 
secondaryImg={`/static/speakers/Speaker-${speakerid}.jpg`}
alt = ''/>
            </div>
            )
        })}

    
</div>
  )
}

export default ImageChangeOnMouseScroll