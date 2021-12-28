import ItemDescription from "../atoms/ItemDescription"
import ItemImage from "../atoms/ItemImage"

interface Props {
    image: string,
    description: string,

}

const ProductCard = ({image, description}: Props) => {
    return (
        <section className="product-card-container">
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
