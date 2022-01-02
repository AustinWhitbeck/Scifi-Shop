import { useContext } from "react";
import { CartContext } from "../../ContextProviders/CartContext/CartContextProvider";
import CartContainer1 from "../UI/organisms/CartContainer1/CartContainer1";
import Header from "../UI/organisms/Header/Header";



const CartPage = () => {

    // const { cart } = useContext(CartContext);


    // let newItems = {...cart};
    // console.log(cart);
    // console.log(newItems);

    return(
        <main>
            <Header />
            <CartContainer1/>
        </main>
    )
}
export default CartPage;