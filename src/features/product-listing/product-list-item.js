import React from 'react';

function ProductListItem(props){
    return (
        <div>
            <h3>props.product.name</h3>
            {/* <img
            height={100}
            title={props.name}
            src={`/products/${props.image}`}></img> */}
            <div>{props.product.description}</div>
            <div>${props.product.price}</div>
            <div><button>Add to cart</button></div>
        </div>
    )
}
export default ProductListItem;