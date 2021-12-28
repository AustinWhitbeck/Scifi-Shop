import LinkBtn from "../atoms/LinkBtn";


const NavBar = () => {

    return(
        <nav className="nav-container">
            <ul>
                <li>
                    <LinkBtn
                        text="Home"
                        link="/"
                    />
                </li>
                <li>
                <LinkBtn
                        text="Cart"
                        link="/Cart"
                    />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;