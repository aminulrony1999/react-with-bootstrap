import React from 'react';
import './PriceCard.css';
const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4'>
            <h2>
            <span className='text-purple-500 text-5xl font-extrabold'>{price.price}</span>
            <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold'>{price.name}</h5>
        </div>
    );
};

export default PriceCard;