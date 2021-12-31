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


{/* name: string,
    image: string,
    price: number,
    description: string,
    itemId: string */}


            {/* <ProductCard 
                image="sample image"
                description="sample description 1"
            />
            <ProductCard 
                image="sample image 2"
                description="sample description 2"
            />
            <ProductCard 
                image="sample image"
                description="sample description 1"
            />
            <ProductCard 
                image="sample image 2"
                description="sample description 2"
            />
            <ProductCard 
                image="sample image"
                description="sample description 1"
            />
            <ProductCard 
                image="sample image 2"
                description="sample description 2"
            />
            <ProductCard 
                image="sample image"
                description="sample description 1"
            />
            <ProductCard 
                image="sample image 2"
                description="sample description 2"
            /> */}
        </section>
    )
}

export default ProductsContainer1
