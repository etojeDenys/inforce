import React from "react";
import { Link } from "react-router-dom";


const Header: React.FC = () => {


    return (
        <header className='header'>
            <Link to='/'>Products</Link>
        </header>
    )
}

export default Header