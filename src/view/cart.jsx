import { useCart } from "../utils/cartContext";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import "../styles/cart.css";
import { PriceCalculation } from "../components/pricecalculation";

export function Cart(){
    const {cart,dispatch}=useCart();

    function deleteItem(id){
        dispatch({type:"REMOVE_ITEM",id:id});
    }
    function updateQuantity(id,increase){
        dispatch({type:"UPDATE_QUANTITY",id:id,increase:increase})
    }

    return(
        <div className="cart">
            <div className="cart-title">CART</div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="table_header">Product</th>
                        <th className="table_header">Price</th>
                        <th className="table_header">Quantity</th>
                        <th className="table_header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item)=>{
                            return(
                                <tr className="table_row" key={item.id}>
                                    <td className="table_data">{item.title}</td>
                                    <td className="table_data">${item.price}</td>
                                    <td className="table_data" id="item-quality">
                                        {item.quantity} 
                                        <div className="quantity_actions">
                                            <IoIosArrowUp id="arrows" onClick={()=>updateQuantity(item.id,true)}/> 
                                            <IoIosArrowDown id="arrows" onClick={()=>updateQuantity(item.id,false)}/>
                                        </div>
                                    </td>
                                    <td className="table_data">
                                        <button className="table-deletebtn" onClick={()=>deleteItem(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <PriceCalculation cart={cart}/>
        </div>
    );
}