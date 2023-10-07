import React from 'react';
import './PriceCard.css';
const PriceCard = ({price}) => {
    return (
        <div>
            <h2 className='text-5xl font-extrabold'>{price.price}</h2>
            <h5 className='text-2xl font-bold'>{price.name}</h5>
        </div>
    );
};

export default PriceCard;