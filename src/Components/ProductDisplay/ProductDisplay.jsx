import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                {/* <img src={product.image} alt="" /> */}
                {/* <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" /> */}

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src="" alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Victoire de Castellane’s creations continue the sparkling story started by Kalopsia: 
            a story of femininity, elegance and refinement, adorned with delicately rendered boldness.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}><b>Cart</b></button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, {product.category}</p>
            <p className='productdisplay-right-category-y'><span>Tags :</span>Kalopsia Iconics, Holiday Collection, Latest</p>

        </div>
    </div>
  )
}

export default ProductDisplay