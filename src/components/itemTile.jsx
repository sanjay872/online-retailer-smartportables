
import ItemType from '../types/itemType';
import '../styles/itemTile.css';
import { useNavigate,useSearchParams } from 'react-router-dom';

function ItemTile({item,setViewProduct, setSplitView}){
    const image = require("../images/"+item.imageId);
    const navigate=useNavigate()
    const [searchParams] = useSearchParams();

    const category = searchParams.get('category'); 
    const text = searchParams.get('text');    

    function showView(){
        console.log("Hi")
        let url='';
        if(category){
            url+='?category='+category;
            if(text){
                url+='&&text='+text;
            }
        }
        else if(text){
            url+='?text='+text;
        }
        setViewProduct(item);
        navigate('view/'+item.id+url);
    }

    return(
        <div className='item' onClick={showView}>
            <div className='item_header'>
                <div className='item_header-name'>{item.title}</div>
                <div className='item_header-id'>#{item.id}</div>
            </div>
            <div className='item_content'>
                <img className='item_content-image' src={image} alt={item.title}></img>
                <div className='item_content-description'>{item.description}</div>
            </div>
            <div className='item_footer'>
                <div className='item_footer-stock'>{item.stock} left out</div>
                <div className='item_footer-price'>${item.price}</div>
            </div>
            {/* <div className='item-sale-price'>{item.salePrice}</div> */}
        </div>
    );
}

ItemTile.propTypes={
    item:ItemType
}

export default ItemTile;