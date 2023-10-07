import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [{id : 1, name : 'Home', path : '/'}, {id : 2, name :'About', path:'/about'},{id : 3, name : 'Contact', path :'/contact'},{id : 4, name : 'Products', path : '/products'},{id : 5, name : 'Services', path : '/services'}]
    return (
        <nav>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link key = {route.id}> </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;