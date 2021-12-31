import { Item } from "../../../../Models/Models";
import ItemDescription from "../../atoms/ItemAtoms/ItemDescription"
import ItemImage from "../../atoms/ItemAtoms/ItemImage"
import ItemName from "../../atoms/ItemAtoms/ItemName";
import ItemPrice from "../../atoms/ItemAtoms/ItemPrice";

// CSS //
import './ProductCard.css';

interface Props {
    name: string,
    image: string,
    price: number,
    description: string,
    itemId: string
}



const ProductCard = ({name, image, price, description, itemId}: Props) => {

    const thisItem: Item = {
        name: name,
        image: image,
        price: price,
        description: description,
        itemId: itemId
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
            
        </section>
    )
}

export default ProductCard
