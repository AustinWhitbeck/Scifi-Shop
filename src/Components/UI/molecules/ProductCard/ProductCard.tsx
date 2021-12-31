import ItemDescription from "../../atoms/ItemAtoms/ItemDescription"
import ItemImage from "../../atoms/ItemAtoms/ItemImage"

// CSS //
import './ProductCard.css';

interface Props {
    name?: string,
    image: string,
    price?: number,
    description: string,
    itemId?: string
}



const ProductCard = ({name, image, price, description, itemId}: Props) => {
    return (
        <section className="product-card-container flex-column">
            <ItemImage 
                image={image}
            />
            <ItemDescription 
                text={description}                
            />
            
        </section>
    )
}

export default ProductCard
