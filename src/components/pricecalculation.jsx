import { useState } from "react";

import "../styles/pricecalculation.css";

export function PriceCalculation({cart}){
    
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [zipCode,setZipCode]=useState(0);
    const [isCompleted,setIsCompleted]=useState(false);

    const [itemTotalPrice,setItemPrice]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [taxPrice,setTaxPrice]=useState(0);


    function calculatePrice(e){
        e.preventDefault();
        if(fullName===""||email===""||address===""||zipCode===0){
            setIsCompleted(false);
            return;
        }
        setIsCompleted(true);

        var itemTotal=0;
        cart.forEach((item)=>{
            itemTotal+=item.price*item.quantity;
        })
        setItemPrice(itemTotal);

        const tax=itemTotal*((zipCode%10)/100)
        setTaxPrice(tax);
        setTotalPrice(itemTotal+tax);
    }

    function reset(){
        setItemPrice(0);
        setTaxPrice(0);
        setTotalPrice(0);
        setIsCompleted(false);
    }

    // input validation

    return(
        <div className="price_calculation">
            <div className="price_calculation-status">
                {
                    isCompleted?
                    <div className="price_calculation_detail">
                        <div className="price_calculation_detail-info">Calculated Price!</div>
                        <table className="price_table">
                            <tbody>
                                <tr className="price_table-row">
                                    <td className="price_table-data">Total Price</td>
                                    <td className="price_table-data">${itemTotalPrice}</td>
                                </tr>
                                <tr className="price_table-row">
                                    <td className="price_table-data">Tax</td>
                                    <td className="price_table-data">${taxPrice}</td>
                                </tr>
                                <tr className="price_table-row">
                                    <td className="price_table-data">Final Price</td>
                                    <td className="price_table-data">${totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div></div>
                    </div>
                    :
                    <></>
                }   
            </div>
            <form onSubmit={calculatePrice} className="price_calculation_form">
                {isCompleted?<></>:<div className="price_calculation_detail-info">Fill all the fields</div>}
                <input type="text" name="FullName" className="price_calculation_form-input" placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)}/>
                <input type="text" name="Email" className="price_calculation_form-input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" name="Address" className="price_calculation_form-input" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
                <input type="text" name="zipcode" className="price_calculation_form-input" placeholder="Zip Code" onChange={(e)=>setZipCode(e.target.value)}/>
                <button type="submit">Checkout</button>
                <button type="button" onClick={reset}>Cancel</button>
            </form>
        </div>
    );
}