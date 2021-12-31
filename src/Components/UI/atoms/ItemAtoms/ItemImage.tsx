
import './ItemImage.css';
interface Props {
    image?: string
}


const ItemImage = ({image}: Props) => {
    return (
        <img className="item-image"src={image} alt={`this item is a ${image}`} />
    )
}

export default ItemImage
