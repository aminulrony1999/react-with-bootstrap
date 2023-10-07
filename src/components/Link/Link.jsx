import React from 'react';
import './Link.css';
const Link = (props) => {
    const {route} = props;
    return (
        <li className='mr-10'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;