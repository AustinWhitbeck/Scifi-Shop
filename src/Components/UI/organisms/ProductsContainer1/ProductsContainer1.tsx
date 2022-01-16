import { Container } from '@mui/material';
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
        <Container maxWidth="sm" >

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
        </Container>
    )
}

export default ProductsContainer1
