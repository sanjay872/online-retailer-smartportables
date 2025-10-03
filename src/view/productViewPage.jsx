import { useOutletContext } from "react-router-dom";
import '../styles/productviewpage.css';

export default function ProductViewPage(){

    const product = useOutletContext();

    const  image = require("../images/"+product.imageId);

    function addItemToStorage(){
        const existCart=localStorage.getItem("cart");

        if(existCart!=null){
            const cartObj=JSON.parse(existCart);
            let foundProduct=false;
            cartObj.forEach((item)=>{
                if(item.id===product.id){
                    item.quantity++;
                    foundProduct=true;
                    return;
                }
            });
            if(!foundProduct)
                cartObj.push({...product,quantity:1});
            localStorage.setItem("cart",JSON.stringify(cartObj));
        }
        else{
            var cart=[]
            cart.push({...product,quantity:1});
            const stringCart=JSON.stringify(cart);
            localStorage.setItem("cart",stringCart);
        }
    }

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
                <button className="cart_btn" onClick={addItemToStorage}>Add to Cart</button>
            </div>
        </div>
    );
}