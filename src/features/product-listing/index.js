import React from 'react';

import ProductListItem from './product-list-item'
function ProductListing(props){
    return (
        <div>
        {
            props.product.map = (product =><ProductListItem product={product} />)
        }
        </div>
    )
}
export default ProductListing;