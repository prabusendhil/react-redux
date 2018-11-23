import React from 'react';
import ProductListing from './../features/product-listing';
import data from '../data/products';
function HomePage () {
return (
    <div><h1>Home Page</h1>
    <ProductListing product={data.products}/>
    </div>
)
}
export default HomePage;