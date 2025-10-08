import { useNavigate } from 'react-router-dom';
import "../styles/header.css";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useState } from 'react';
import { useCart } from '../utils/cartContext';
import { FaCartArrowDown } from "react-icons/fa";

function Header(){

    const {cart}=useCart();

    const product_types=[
        {
            id:"1",
            name:"Wearable Technology"
        },
        {
            id:"2",
            name:"Phones"
        },
        {
            id:"3",
            name:"Laptops"
        },
        {
            id:"4",
            name:"Voice Assistant"
        }
    ];
    const navigate = useNavigate();
    const [showMenu,setShowMenu]=useState(false);
    const [search,setSearch]=useState({category:"all",text:""});

    function searchProduct(){
        if(search.text===""||search.text===undefined||search.text==null){
            return;
        }
        navigate("/products?category="+search.category+"&text="+search.text);
    }

    return(
        <div className='header'>
            <div className='nav_btn' onClick={()=>setShowMenu((prev)=>!prev)}>
                {showMenu?<IoMdClose className='cross_btn'></IoMdClose>:<BsList className='toggle_btn'></BsList>}
            </div>
            <div className='nav_actions'>
                <FaHome onClick={()=>navigate("/")} className='header-item'></FaHome>
                <div className={showMenu?'show_header-items':'header-items'}>
                        {
                            product_types.map((product)=><div className='header-item' key={product.id} onClick={()=>navigate("/products?category="+product.name)}>{product.name}</div>)
                        }
                </div>        
                <div className={showMenu?'show_search-items':'header-items'}>
                        <select id='category_select' onChange={(event)=>{setSearch((prev)=>{return {...prev,category:event?event.target.value:""}})}}>
                            <option value="all">All</option>
                            {
                                product_types.map((product)=><option key={product.id}>{product.name}</option>)
                            }
                        </select>
                        <input type="search" value={search.text} name="product-search" id="product_search_bar" onChange={(event)=>{setSearch((prev)=>{return {...prev,text:event?event.target.value:""}})}}/>
                        <button id='search_btn' onClick={searchProduct}>Search</button>
                </div>
                <div className='cart_icon'>
                    <FaCartArrowDown className='header-item' onClick={()=>navigate("/cart")}/><span className='cart_item_count'>{cart.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;