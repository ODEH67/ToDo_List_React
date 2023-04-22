import React from 'react';
import { useState } from 'react';

import './anh.css';
import { RiMenuUnfoldFill } from "react-icons/ri";

import {RiCalendarEventFill} from 'react-icons/ri';
import {RiSettings5Fill} from 'react-icons/ri';
import Logout from './logout.js';
import Popup from './popup.js';



export default function Sidebar() {
    const [slide, setSlide] = useState(false);

    return (
        <section className={slide ? 'side-bar' : 'side-bar-XL'}>
            <div className="menu">
                <RiMenuUnfoldFill onClick = {() => setSlide(!slide)} />
            </div>
            <div className="task-list">
                <nav id=''>
                    <a><Popup className="list-items" />{slide?"":<p className='nav-items'>PROFILE</p>}</a>
                    <a><RiCalendarEventFill className="list-items" />{slide?"":<p className='nav-items'>EVENT REMINDER</p>}</a>
                    <a><RiSettings5Fill className="list-items"  />{slide?"":<p className='nav-items'>SETTING</p>}</a>           
                </nav>
            </div>
            <div className='menu'><Logout /></div>
            
          
            
        </section>
    )
}