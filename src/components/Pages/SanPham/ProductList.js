
// import iconshop from '../photo/iconshop.png';
// import lup from '../photo/lup.png';

import { useState } from 'react';

import { ProductsListJson } from '../../json/ProductJson';
import ProductListShow from './ProductListShow';

function ProductList() {
    return (
        <>
            <h1>Sản Phẩm</h1>
            <div className="products-container"style={{marginBottom: "50px"}}>
                {ProductsListJson.map((product) => (
                    <ProductListShow key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}
export default ProductList;