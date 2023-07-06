import React, {useState} from 'react'
import arrowLeft from './images/icon-previous.svg'
import arrowRight from './images/icon-next.svg'

export default function ProductImage({images, thumbnails, setLightboxOpen = () => {}}) {
  
  const [imgIndex, setImgIndex] = useState(0)

  function seePrevImg() {
    if (imgIndex === 0) {
        setImgIndex(images.length - 1)
    } else {
        setImgIndex(prev => prev - 1)
    }
  }

  function seeNextImg() {
    if (imgIndex === images.length - 1) {
        setImgIndex(0)
    } else {
        setImgIndex(prev => prev + 1)
    }
  }

  return (
    <div className='product-images'>
      <img className='img-large' src={images[imgIndex]} onClick={setLightboxOpen}/>
        {thumbnails.map((img, index) => {
            return (
                <div className={`thumbnail ${index === imgIndex && 'selected'}`}>
                    <img 
                        src={img} 
                        onClick={() => setImgIndex(index)}
                    />
                </div>)
        })}
        <div className='arrow-btn arrow-btn-left' onClick={seePrevImg}>
            <img src={arrowLeft} />
        </div>
        <div className='arrow-btn arrow-btn-right' onClick={seeNextImg}>
            <img src={arrowRight} />
        </div>
    </div>
  )
}
