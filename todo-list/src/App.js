import React from 'react';
import "./2.css"
import "./calendar.css"
import "./TodoList_odeh_1.css"
import {ListsCard} from "./listsCard"

import ProIcon from "./pics/odeh/icon_1.png"

import {MdOutlineDarkMode} from 'react-icons/md'
import {MdOutlineLanguage} from 'react-icons/md'


export default function App() {
  return (
<>
    <main>
        <header>
            <p id="namey">LiSTa</p>
            <ul className="head">
                <li><a href="#" id="dark_button" ><MdOutlineDarkMode/></a></li>
                <li><a href="#" ><MdOutlineLanguage/></a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#"><img id="icon_1" src= {ProIcon} alt="icon"/></a></li>
            </ul>
        </header>
        <ListsCard/>
            <section className="leftsidebar" >
                <div className="nav-header">
                    <p className="logo"></p>
                    <i className="bx bx-menu-alt-right btn-menu" ></i>
                </div>
            <ul className="nav-links">
                <li>
                    <i className="bx bx-search search-btn"></i>
                    <input type="text" placeholder="search..." />
                    <span className="tooltip">Search</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-dashboard"></i>
                        <span className="title">Dashbord</span>
                    </a>
                    <span className="tooltip">Dashbord</span>
                </li>
                <li>
                    <a href="#">
                    <i className="bx bxs-calendar"></i>
                        <span className="title">Calendar</span>
                        </a>
                    <span className="tooltip">Calendar</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-bar-chart-alt-2"></i>
                        <span className="title">Activity</span>
                    </a>
                    <span className="tooltip">Activity</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cog"></i>
                        <span className="title">Settings</span>
                    </a>
                    <span className="tooltip">Settings</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-log-out"></i>
                        <span className="title">Log Out</span>
                    </a>
                    <span className="tooltip">Log Out</span>
                </li>
            </ul>
            </section>
            <section>
            {/* <!--this is the section for the right bar side calendar --> */}
                <section className="rightsidebar">
                <div className="container">
                    <div className="calendar">
                        <div className="month">
                        <i className="fas fa-angle-left prev"></i>
                        <div className="date">
                            <h1></h1>
                            <p></p>
                        </div>
                        <i className="fas fa-angle-right next"></i>
                        </div>
                        <div className="weekdays">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>
                        <div className="days"></div>
                    </div>
                </div>
                </section>
            </section>
    </main>
</>
  );
}

