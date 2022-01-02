import { Item } from "../../../../Models/Models";
import ItemDescription from "../../atoms/ItemAtoms/ItemDescription"
import ItemImage from "../../atoms/ItemAtoms/ItemImage"
import ItemName from "../../atoms/ItemAtoms/ItemName";
import ItemPrice from "../../atoms/ItemAtoms/ItemPrice";

// CSS //
import './CartItemCard.css';
import { CartContext } from "../../../../ContextProviders/CartContext/CartContextProvider";
import { useContext } from "react";

interface Props {
    name: string,
    image: string,
    price: number,
    description: string,
    itemId: string
}



const ProductCard = ({name, image, price, description, itemId}: Props) => {

    // Cart Context 
    const { cart } = useContext(CartContext)


    // object that contains the value of this specific item 
    // This will be used to push to the "Cart" context Provider

    const thisItem: Item = {
        name: name,
        image: image,
        price: price,
        description: description,
        itemId: itemId
    }

    return (
        <main className="cart-item-card-container flex-column">
            <section>
                <ItemName
                    name={name}
                />
                <ItemImage 
                    image={image}
                />
                <ItemPrice 
                    price={price}
                />
            </section>
            <section>
                <ItemDescription 
                    text={description}                
                />
            </section>
        </main>
    )
}

export default ProductCard