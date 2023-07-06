import React from "react";
import ProductImage from "./ProductImage";
import closeIcon from './images/icon-close.svg'

export default function Lightbox({open, setOpen, images, thumbnails}) {
  return open && (
    <>
        <div className="overlay"></div>
        <div className="lightbox">
            <img className="close-icon" src={closeIcon} onClick={() => setOpen(false)} />
            <ProductImage images={images} thumbnails={thumbnails}/>
        </div>
    </>
  );
}
