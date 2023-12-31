import PriceCard from '../PriceCard/PriceCard';
import './Pricelist.css'
import React, { useEffect, useState } from 'react';

const Pricelist = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[]);
    return (
        <div className='mx-12'>
            <h2 className='p-4 text-5xl text-center text-purple-950 bg-purple-300 font-bold'>Awesome Affordable Prices</h2>
            <div className='grid md:grid-cols-3 gap-3'>
            {
                prices.map(price => <PriceCard price ={price} key ={price.id} ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default Pricelist;