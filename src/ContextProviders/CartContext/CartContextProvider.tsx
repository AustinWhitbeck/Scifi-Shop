import React, { ReactNode, useState } from "react";
import { Cart, Item } from "../../Models/Models";


const defaultCart: Cart = {
    cart: []
}

export const ProfilesContext = React.createContext(defaultCart);

export const CartContextProvider = ({children}: {children: ReactNode}) => {

    const [cart, setCart] = useState<Item[]>();


    return(
        <ProfilesContext.Provider value={{cart}}>
            {children}
        </ProfilesContext.Provider>
    )
}