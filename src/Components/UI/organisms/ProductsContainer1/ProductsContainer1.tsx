import { useContext } from 'react';
import { MasterItemsContext } from '../../../../ContextProviders/MasterItemsContext/MasterItemsContext';
import ProductCard from '../../molecules/ProductCard/ProductCard'

//  CSS //
import './ProductsContainer1.css';

const ProductsContainer1 = () => {

    const { masterItemsList } = useContext(MasterItemsContext);

    console.log(masterItemsList);
    console.log(MasterItemsContext);
    return (
        <section className="products-container flex-column">

            {masterItemsList?.map((item, index) => 
                <ProductCard
                    key={`${item.itemId}-${index}`}
                    name={`${item.name}`}
                    image={`${item.image}`}
                    // price={`${item.price}`}
                    price={1}
                    description={`${item.description}`}
                    itemId={`${item.itemId}`}
                />
            
            )}
        </section>
    )
}

export default ProductsContainer1
