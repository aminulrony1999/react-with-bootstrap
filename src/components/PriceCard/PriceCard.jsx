import React from 'react';
import './PriceCard.css';
import Feature from '../Feature/Feature';
const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 text-center flex flex-col'>
            <h2>
            <span className='text-purple-800 text-5xl font-extrabold'>{price.price}</span>
            <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold my-6'>{price.name}</h5>
            <p className='underline font-bold text-white'>Features :</p>
            {
                price.features.map((feature, idx) => <Feature feature = {feature} key ={idx}></Feature> )
            }
            <button className='mt-auto hover:bg-green-700 w-full bg-green-600 py-2 rounded-md text-white'>Enrol now</button>
        </div>
    );
};

export default PriceCard;