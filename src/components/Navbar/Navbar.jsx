// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open,setOpen] = useState(false);
    const routes = [{id : 1, name : 'Home', path : '/home'}, {id : 2, name :'About', path:'/about'},{id : 3, name : 'Contact', path :'/contact'},{id : 4, name : 'Products', path : '/products'},{id : 5, name : 'Services', path : '/services'}]
    return (
        <nav>
            <div onClick={() => setOpen(!open)}>
                <span>{open === true ? 'open' : 'close'}</span>
                <Bars3Icon className="h-6 w-6 text-blue-500" />
            </div>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link route = {route} key = {route.id}> </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;