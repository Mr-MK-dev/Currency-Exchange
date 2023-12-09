import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src="assets/banqueMisr.png" width="40" height="40" alt="" />
            <nav className="navLinks">
                {/* <button>EUR-USD Details</button>
                <button>EUR-GBP Details</button> */}
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'navIsActive' : ''
                    }
                >
                    {' '}
                    EUR-USD Details{' '}
                </NavLink>
                <NavLink> EUR-GBP Details </NavLink>
            </nav>
        </div>
    );
};

export default Header;
