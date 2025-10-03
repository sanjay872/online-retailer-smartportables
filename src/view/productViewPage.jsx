import { useOutletContext } from "react-router-dom";
import '../styles/productviewpage.css';

export default function ProductViewPage(){

    const product = useOutletContext();

    const  image = require("../images/"+product.imageId);

    return(
        <div className="product">
            <div className="product_leftside">
                <div className="product_leftside_start">
                    <div className="product_leftside_start-title">{product.title} <span className="product_leftside_start-id">(#{product.id})</span></div>
                </div>
                <img className='product_leftside-image' src={image} alt={product.title}></img>
            </div>
            <div className="product_rightside">
                <div className="product_rightside_description">
                    <div className="product_rightside_description-title">About Product</div>
                    <div className="product_rightside_description-value">{product.description}</div>
                </div>
                <div className="product_rightside_end">
                    <div className="product_rightside_end-price">${product.price}</div>
                    <div className="product_rightside_end-stock">Left out {product.stock}</div>
                </div>
            </div>
        </div>
    );
}