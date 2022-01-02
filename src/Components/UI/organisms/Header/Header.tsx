

import Title from '../../atoms/Title';
import NavBar from '../../molecules/NavBar';
import './Header.css';


const Header = () => {

    return(
        <header className="header-container flex-row">
            <Title
                text="SciFi Store"
            />
            <NavBar/>
        </header>
    )
}

export default Header;