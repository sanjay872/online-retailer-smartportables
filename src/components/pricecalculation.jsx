import { useState } from "react";
import { toast } from "react-toastify";

import "../styles/pricecalculation.css";

export function PriceCalculation({cart}){
    
    const [fullName,setFullName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [address,setAddress]=useState("");
    const [zipCode,setZipCode]=useState("");
    const [isCompleted,setIsCompleted]=useState(false);

    const [itemTotalPrice,setItemPrice]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [taxPrice,setTaxPrice]=useState(0);


    function calculatePrice(e){
        e.preventDefault();
        if(fullName===""||phoneNumber===""||address===""||zipCode===0){
            setIsCompleted(false);
            toast("Fill all fields to checkout!")
            return;
        }

        if (!/^\d*$/.test(phoneNumber)) {
            toast('Only digits are allowed in Phone number.');
            return;
        } else if (phoneNumber.length > 0 && !/^\d{10}$/.test(phoneNumber)) {
            toast('Phone number must be exactly 10 digits.');
            return;
        }

        if(!/^\d*$/.test(zipCode)){
            toast('Only digits are allowed in Zip code.')
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
        setFullName("");
        setAddress("");
        setPhoneNumber("");
        setZipCode("");
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
                                    <td className="price_table-data">${itemTotalPrice.toFixed(2)}</td>
                                </tr>
                                <tr className="price_table-row">
                                    <td className="price_table-data">Tax</td>
                                    <td className="price_table-data">${taxPrice.toFixed(2)}</td>
                                </tr>
                                <tr className="price_table-row">
                                    <td className="price_table-data">Final Price</td>
                                    <td className="price_table-data">${totalPrice.toFixed(2)}</td>
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
                <input type="text" name="FullName" className="price_calculation_form-input" value={fullName} placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)}/>
                <input type="text" name="PhoneNumber" className="price_calculation_form-input" value={phoneNumber} placeholder="Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                <input type="text" name="Address" className="price_calculation_form-input" value={address} placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
                <input type="text" name="zipcode" className="price_calculation_form-input" value={zipCode} placeholder="Zip Code" onChange={(e)=>setZipCode(e.target.value)}/>
                <button type="submit" className="price_calculation_form-checkout">Checkout</button>
                <button type="button" className="price_calculation_form-cancel" onClick={reset}>Cancel</button>
            </form>
        </div>
    );
}