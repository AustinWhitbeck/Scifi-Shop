import React, { ReactNode, useState } from "react";
import { Cart, Item } from "../../Models/Models";

// imported images //
import sword1 from '../../Images/Products/sword1.png';


const defaultCart: Cart = {
    cart: [],
    addItem: (item: Item) => []
}

export const CartContext = React.createContext(defaultCart);

export const CartContextProvider = ({children}: {children: ReactNode}) => {

    // Base Cart State //
    const [cart, setCart] = useState<Item[]>([
        {
            name: "Test One",
            image: sword1,
            price: 10,
            description: "This is a great item to purchase",
            itemId: "001"
        }
    ]);


//// **** FUNCTIONS **** ///


    // Add Item to Cart //

   
    const addItem = (item: Item) => {
        let currentItems = [...cart];
        console.log(currentItems);
        currentItems.push(item);
        setCart(currentItems);
        console.log(cart);
    }

    // const deleteItem = ()




    return(
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}