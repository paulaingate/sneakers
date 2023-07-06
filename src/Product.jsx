import React, {useState} from "react";
import cartIcon from "./images/icon-cart.svg";
import Counter from "./Counter";
import ProductImage from "./ProductImage";
import Lightbox from "./Lightbox";

export default function Product({ addToCart }) {
  const [productQuantity, setProductQuantity] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const productData = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything
    the weather can offer.`,
    fullPrice: 250,
    discount: 0.5,
    images: [
      './image-product-1.jpg',
      './image-product-2.jpg',
      './image-product-3.jpg',
      './image-product-4.jpg'
    ],
    thumbnails: [
      './image-product-1-thumbnail.jpg',
      './image-product-2-thumbnail.jpg',
      './image-product-3-thumbnail.jpg',
      './image-product-4-thumbnail.jpg'
    ]
  }

  function addProductToCart() {
    if (productQuantity === 0) {
      return
    }
    addToCart({
      id: productData.id,
      name: productData.name,
      price: productData.fullPrice * productData.discount,
      quantity: productQuantity,
      imageUrl: productData.thumbnails[0]
    })
    setProductQuantity(0)
  }

  return (
    <main className="product-page-container">
      <ProductImage setLightboxOpen={setLightboxOpen} images={productData.images} thumbnails={productData.thumbnails}/>
      <div className="product-details">
        <div>
          <h4>Sneaker Company</h4>
          <h1>{productData.name}</h1>
          <p>
            {productData.description}
          </p>
        </div>

        <div className="price-info-container">
          <span className="price">${Number(productData.fullPrice * productData.discount).toFixed(2)}</span>
          <span className="discount">{productData.discount * 100}%</span>
          <p className="old-price">${Number(productData.fullPrice).toFixed(2)}</p>
        </div>

        <div className="add-to-cart-container">
          <Counter 
            count={productQuantity} 
            setCount={setProductQuantity} 
          />
          <button className="add-to-cart-btn" onClick={() => addProductToCart()}>
            <img src={cartIcon} />
            Add to cart
          </button>
        </div>

      </div>
      <Lightbox open={lightboxOpen} setOpen={setLightboxOpen} images={productData.images} thumbnails={productData.thumbnails}/>
    </main>
  );
}
