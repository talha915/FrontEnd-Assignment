import React, { useState } from 'react';
// Header Logo
import logo from '../../images/logo.svg';
// Styling
import '../../styles/header.css';

function Header(props) {

    const [searchItem, setSearchField] = useState('');

    const searchField=(e)=> {
        setSearchField(e.target.value);
    }

    return (       
        <div className="container-header">
            <div className="left-header">
                <img src={logo} alt={"timescale"} />
            </div>
            <div className="right-header">
                <input type="text" placeholder="Search for a movie" onChange={(e)=>searchField(e)} onKeyDown={()=>props.sendHome(searchItem)}/>
            </div>
        </div>
    )
}
export default Header;