import { useNavigate } from 'react-router-dom';


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

    return(
        <div className='header'>
            {
                product_types.map((product)=><div key={product.id} onClick={()=>navigate("/products/"+product.id)}>{product.name}</div>)
            }
        </div>
    );
}

export default Header;