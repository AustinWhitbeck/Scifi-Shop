import { Link } from "react-router-dom";


interface Props {
    text: string,
    link: string
}


const ClickBtn = ({text, link}: Props) => {

    return(
        <Link to={link}>
        <button className="LinkBtn">
            {text}
        </button>
        </Link>
    )
}

export default ClickBtn;