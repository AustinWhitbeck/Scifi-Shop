
interface Props {
    text: string
}

const ItemDescription = ({text}: Props) => {
    return (
        <div>
            <p>Test Text{text}</p>
        </div>
    )
}

export default ItemDescription;
