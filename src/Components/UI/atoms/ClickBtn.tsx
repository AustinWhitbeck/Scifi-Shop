
import Button from '@mui/material/Button';

interface Props {
    click: () => void,
    text: string
}


const ClickBtn = ({click, text}: Props) => {

    return(
        <Button variant='contained' onClick={click} >
            {text}
        </Button>
    )
}

export default ClickBtn;