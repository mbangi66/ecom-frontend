import React from 'react';
//Import the css file for styling 
import './productCard.css';

const ProductCard = (props) => {
    const { name, price } = props;
    return ( 
        <div className='product-card container'>
            <div>
                <p className='product-card label'>{name}</p>
                <p className='product-card label'>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;