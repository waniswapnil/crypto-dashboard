import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
    
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to="/" activeStyle>
            Home
        </NavLink>
	
        <NavLink to='/orders' activeStyle>
			Orders
		</NavLink>

		<NavLink to='/dashboard' activeStyle>
			Dashboard
		</NavLink>
	
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;