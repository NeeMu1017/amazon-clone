import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <nav className='navbar'>
            {/* Logo of brand */}

            <Link to={"/"}>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo"
                    className='navbar_brand'
                />
            </Link>
            <div className="search_fild">
                <input type="text" className="search_bar" />
                <SearchIcon className='search_icon'/>
            </div>


        </nav>
    )
}

export default Navbar