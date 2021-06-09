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
		{/* <NavLink to='/bonds' activeStyle>
			Bonds
		</NavLink>
        <NavLink to='/create-bond' activeStyle>
			Create Bond
		</NavLink> */}
        <NavLink to='/orders' activeStyle>
			Orders
		</NavLink>
		<NavLink to='/timtable' activeStyle>
			TimTable
		</NavLink>
		<NavLink to='/login' activeStyle>
			Login
		</NavLink>
		<NavLink to='/dashboard' activeStyle>
			Dashboard
		</NavLink>
        {/* <NavLink to='/issue-quote' activeStyle>
        Issue Quote
		</NavLink>
        <NavLink to='/create-organization' activeStyle>
        Create Organization
		</NavLink>
        <NavLink to='/portfolio' activeStyle>
        Portfolio
		</NavLink>
        <NavLink to='/update-participants' activeStyle>
        Update Participants
		</NavLink> */}
	
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;