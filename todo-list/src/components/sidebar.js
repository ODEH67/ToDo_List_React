import React from 'react';
import './anh.css';
import { RiMenuUnfoldFill } from "react-icons/ri";

import {RiAccountPinCircleFill} from 'react-icons/ri';
import {RiCalendarEventFill} from 'react-icons/ri';
import {RiSettings5Fill} from 'react-icons/ri';
import Profile from './profile.js';
import Popup from './popup.js';

export default function Sidebar() {
    return (
        <section className="side-bar">
            <div className="menu">
                <RiMenuUnfoldFill />
            </div>
            <div className="task-list">
                <div id="nav">
                    <a><Popup /></a>
                    <a><RiCalendarEventFill /></a>

                    <a><RiSettings5Fill /></a>

            
                </div>
            </div>
            <Profile />
            
        </section>
    )
}