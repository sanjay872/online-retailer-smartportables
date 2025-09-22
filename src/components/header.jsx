import { useNavigate } from 'react-router-dom';
import "../styles/header.css";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useState } from 'react';

function Header(){

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

    return(
        <div className='header'>
            <div className='nav_btn' onClick={()=>setShowMenu((prev)=>!prev)}>
                {showMenu?<IoMdClose className='cross_btn'></IoMdClose>:<BsList className='toggle_btn'></BsList>}
            </div>
            <div className='nav_actions'>
                <FaHome onClick={()=>navigate("/")} className='header-item'></FaHome>
                <div className={showMenu?'show_header-items':'header-items'}>
                        {
                            product_types.map((product)=><div className='header-item' key={product.id} onClick={()=>navigate("/products/"+product.id)}>{product.name}</div>)
                        }
                </div>        
                <div className={showMenu?'show_search-items':'header-items'}>
                        <button id='category_select'>Category</button>
                        <input type="search" name="product-search" id="product_search_bar" />
                        <button id='search_btn'>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Header;