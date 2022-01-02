import { Item } from "../../../../Models/Models";
import ItemDescription from "../../atoms/ItemAtoms/ItemDescription"
import ItemImage from "../../atoms/ItemAtoms/ItemImage"
import ItemName from "../../atoms/ItemAtoms/ItemName";
import ItemPrice from "../../atoms/ItemAtoms/ItemPrice";
import ClickBtn from "../../atoms/ClickBtn";

// CSS //
import './ProductCard.css';
import { CartContext, CartContextProvider } from "../../../../ContextProviders/CartContext/CartContextProvider";
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
    const { cart, addItem } = useContext(CartContext)


    // object that contains the value of this specific item 
    // This will be used to push to the "Cart" context Provider

    const thisItem: Item = {
        name: name,
        image: image,
        price: price,
        description: description,
        itemId: itemId
    }

    const addThisItem = () => {
        console.log("Before adding the item", cart);
        addItem(thisItem);
        console.log("After adding the item", cart);
    }

    
    return (
        <section className="product-card-container flex-column">
            <ItemName
                name={name}
            />
            <ItemImage 
                image={image}
            />
            <ItemPrice 
                price={price}
            />
            <ItemDescription 
                text={description}                
            />
            <ClickBtn
                text="Add to cart"
                click={addThisItem}
            />
        </section>
    )
}

export default ProductCard
