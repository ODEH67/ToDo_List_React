import React from 'react';
import './anh.css';
import { RiMenuUnfoldFill } from "react-icons/ri";
import {RiLogoutBoxRLine} from 'react-icons/ri';
import {RiAccountPinCircleFill} from 'react-icons/ri';
import {RiCalendarEventFill} from 'react-icons/ri';
import {RiSettings5Fill} from 'react-icons/ri';
import {MdLanguage} from 'react-icons/md';
import {CgDarkMode} from 'react-icons/cg';

export default function Sidebar() {
    return (
        <section className="side-bar">
            <div className="menu">
                <RiMenuUnfoldFill />
            </div>
            <div className="task-list">
                <div id="nav">
                    <a><RiAccountPinCircleFill /></a>
                    <a><RiCalendarEventFill /></a>
                    <a><MdLanguage /></a>
                    <a><CgDarkMode /></a>
                    <a><RiSettings5Fill /></a>

            
                </div>
            </div>
            <div className="logout">
                <RiLogoutBoxRLine />
            </div>
        </section>
    )
}