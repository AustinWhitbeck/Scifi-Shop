
interface Props {
    click: () => void,
    text: string
}


const ClickBtn = ({click, text}: Props) => {

    return(
        <button onClick={click}>
            {text}
        </button>
    )
}

export default ClickBtn;