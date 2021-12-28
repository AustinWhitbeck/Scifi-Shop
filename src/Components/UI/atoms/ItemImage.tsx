
interface Props {
    image?: string
}


const ItemImage = ({image}: Props) => {
    return (
        <div>
            <p>Test Image</p>
            <img src={image} alt={`this item is a ${image}`} />
        </div>
    )
}

export default ItemImage
