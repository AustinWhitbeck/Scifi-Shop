
interface Props {
    price: number
}

const ItemPrice = ({price}: Props) => {
    return (
        <p>Price: ${price}.00</p>
    )
}

export default ItemPrice;
