import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SlidingPane from "react-sliding-pane";
import { render } from "react-dom";
import './anh.css';
import { RiMenuUnfoldFill } from "react-icons/ri";

import {RiAccountPinCircleFill} from 'react-icons/ri';
import {RiCalendarEventFill} from 'react-icons/ri';
import {RiSettings5Fill} from 'react-icons/ri';
import Profile from './profile.js';
import Popup from './popup.js';

const NavData = [
        {
            text: "MY PROFILE",
            icon: <RiAccountPinCircleFill />
        },

        {
            text: "EVENT REMINDER",
            icon: <RiCalendarEventFill />
        },

        {
            text: "SETTING",
            icon: <RiSettings5Fill />
        }
]



export default function Sidebar() {
    const [slide, setSlide] = useState(false);

    return (
        <section className={slide ? 'side-bar' : 'side-bar-XL'}>
            <div className="menu">
                <RiMenuUnfoldFill onClick = {() => setSlide(!slide)} />
            </div>
            <div className="task-list">
                <nav id=''>
                    <a><Popup  />{slide?"":<p className='nav-items'>PROFILE</p>}</a>
                    <a><RiCalendarEventFill/>{slide?"":<p className='nav-items'>EVENT REMINDER</p>}</a>
                    <a><RiSettings5Fill />{slide?"":<p className='nav-items'>SETTING</p>}</a>           
                </nav>
            </div>
            <div className='menu'><Profile /></div>
            
          
            
        </section>
    )
}