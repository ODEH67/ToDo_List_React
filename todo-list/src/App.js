import React from 'react';
import "./2.css"
import "./calendar.css"
import "./TodoList_odeh_1.css"
import {Tasks} from "./components/Tasks"

import ProIcon from "./pics/odeh/icon_1.png"

import {MdOutlineDarkMode} from 'react-icons/md'
import {MdOutlineLanguage} from 'react-icons/md'


export default function App() {
return (
<>
    <main>         {/* the main and header containers are been stayled in the TodoList_odeh_1.css file */}
        <header>
            <p className="namey">LiSTa</p>
            <ul className="head">
                <li><a href="#" className="dark_button" ><MdOutlineDarkMode/></a></li>
                <li><a href="#" ><MdOutlineLanguage/></a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#"><img className="icon_1" src= {ProIcon} alt="icon"/></a></li>
            </ul>
        </header>
        <Tasks/>
    </main>
</>
  );
}

