import React, {useState} from 'react'

export default function ProductImage({images, thumbnails}) {
  
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <div className='product-images'>
      <img className='img-large' src={images[imgIndex]} />
        {thumbnails.map((img, index) => {
            return (
                <div className={`thumbnail ${index === imgIndex && 'selected'}`}>
                    <img 
                        src={img} 
                        onClick={() => setImgIndex(index)}
                    />
                </div>)
        })}
    </div>
  )
}
