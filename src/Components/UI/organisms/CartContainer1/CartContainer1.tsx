import { useContext } from 'react';
import { CartContext } from '../../../../ContextProviders/CartContext/CartContextProvider';
import Title from '../../atoms/Title';
import CartItemCard from '../../molecules/CartItemCard/CartItemCard';


//  CSS //
import './CartContainer1.css';

const CartContainer1 = () => {

    const { cart } = useContext(CartContext);

    
    return (
        <main className="cart-container flex-column">

            <Title 
                text="My Cart"
            />
            {cart?.map((item, index) => 
                <CartItemCard
                    key={`${item.itemId}-${index}`}
                    name={`${item.name}`}
                    image={`${item.image}`}
                    // price={`${item.price}`}
                    price={1}
                    description={`${item.description}`}
                    itemId={`${item.itemId}`}
                />
            
            )}
        </main>
    )
}

export default CartContainer1;