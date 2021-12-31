
interface Props {
    text: string
}

const ItemDescription = ({text}: Props) => {
    return (
            <p>{text}</p>
    )
}

export default ItemDescription;
