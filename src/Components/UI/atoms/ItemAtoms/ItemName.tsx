
interface Props {
    name: string
}

const ItemName = ({name}: Props) => {
    return (
        <h4>{name}</h4>
    )
}

export default ItemName
