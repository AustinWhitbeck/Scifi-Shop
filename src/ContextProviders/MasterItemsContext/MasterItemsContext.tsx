import React, { ReactNode, useState } from "react";
import { Item, MasterList } from "../../Models/Models";

//  Image imports // 

import sword1 from '../../Images/Products/sword1.png';
import sword2 from '../../Images/Products/sword2.png';


// *** This Context will be used to house all of the items available on the application **** // 

const defaultMasterItems: MasterList  = {
   masterItemsList: []
}

export const MasterItemsContext = React.createContext(defaultMasterItems);

export const MasterItemsContextProvider = ({children}: {children: ReactNode}) => {


    // *** THIS IS IT AS A STATE INSTEAD OF JUST AN OBJECT *** ///

    // const [ masterItemsList, setmasterItemsList ] = useState<Item[]>([

    //     {
    //     name: "Test One",
    //     image: "Stand In",
    //     price: 10,
    //     description: "This is a great item to purchase",
    //     itemId: "001"
    //     }
    // ]);

    // *** THIS IS THE CONTEXT AS AN OBJECT *** ///

    const masterItemsList: Item[] = [
        {
            name: "Test One",
            image: sword1,
            price: 10,
            description: "This is a great item to purchase",
            itemId: "001"
        },
        {
            name: "Test Two",
            image: sword2,
            price: 12,
            description: "This is a great item to purchase",
            itemId: "002"
        },
        {
            name: "Test One",
            image: sword1,
            price: 10,
            description: "This is a great item to purchase",
            itemId: "001"
        },
        {
            name: "Test One",
            image: sword1,
            price: 10,
            description: "This is a great item to purchase",
            itemId: "001"
        },
        {
            name: "Test One",
            image: sword1,
            price: 10,
            description: "This is a great item to purchase",
            itemId: "001"
        },
        {
            name: "Test One",
            image: sword1,
            price: 10,
            description: "This is a great item to purchase",
            itemId: "001"
        },

    ]


    return(
        <MasterItemsContext.Provider value={{masterItemsList}}>
            {children}
        </MasterItemsContext.Provider>
    )
}