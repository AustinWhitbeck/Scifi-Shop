import ProductCard from '../../molecules/ProductCard/ProductCard'

//  CSS //
import './ProductsContainer1.css';

const ProductsContainer1 = () => {
    return (
        <section className="products-container flex-column">
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
            />
            <ProductCard 
                image="sample image"
                description="sample description 1"
            />
            <ProductCard 
                image="sample image 2"
                description="sample description 2"
            />
        </section>
    )
}

export default ProductsContainer1
