import { createContext, useContext, useEffect, useReducer } from "react";

const initialState=[];

const findItem= (cart,itemId)=>cart.find((item)=>item.id===itemId); 

function cartReducer(state,action){
    switch(action.type){
         case "ADD_ITEM":
            if(findItem(state,action.payload.id)){
                return state.map((item)=>{
                    if(item.id===action.payload.id){
                        return {...item,quantity:item.quantity+1}
                    }
                    else{
                        return item;
                    }
                })
            }
            else{
                const newItem={...action.payload,quantity:1};
                return [...state,newItem];
            }
        case "REMOVE_ITEM":
            if(findItem(state,action.id)){
                return state.filter((item)=>item.id!==action.id);
            }
            else{
                return state;
            }
        case "CLEAR_CART":
            return [];
        default:
            throw new Error("Invalid Cart Operation!");
    }
}

const CartContext = createContext();

export default function CartProvider({children}){
    const [cart,dispatch] = useReducer(cartReducer,initialState,()=>{
        const saved=localStorage.getItem("cart");
        return saved? JSON.parse(saved):initialState;
    });

    useEffect(()=>{
        console.log(cart);
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart]);

    return(
        <CartContext.Provider value={{cart,dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}