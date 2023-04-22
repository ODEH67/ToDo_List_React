import React from 'react';
import './anh.css';
import {RiLogoutBoxRLine} from 'react-icons/ri';

export default function Logout() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div onClick={handleClick}><RiLogoutBoxRLine /></div>
    )
}

//