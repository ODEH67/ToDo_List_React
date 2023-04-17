import React from 'react';
import { useEffect, useState } from 'react';
//import { CDropdown } from '@coreui/react';

import './anh.css';
import {BsSearch} from 'react-icons/bs';
import {CgDarkMode} from 'react-icons/cg';
import {MdLanguage} from 'react-icons/md';
import {RiAccountCircleFill} from 'react-icons/ri';

export default function Heading() {
    const [theme, setTheme] = useState(false);
    const handleClick=()=>{
        setTheme(!theme)
    }

    useEffect(() => {
        //const element = document.body;
        //element.classList.toggle("light")
        if (theme === true) {
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }
     }

    )


    return(
        <div id='header'>
            <h1>liSTa</h1>
            <div id='head-bar'>
                <div id="search-tool">
                    <input type="text" className="searchTerm" placeHolder="Search..." />
                    <button type="submit" className="searchButton"><BsSearch /></button>
                </div>
                <div id='theme-tool'>
                    <MdLanguage />
                    
                    <div id="darkLight-mode" onClick={handleClick}><CgDarkMode /></div>
                    <RiAccountCircleFill />
                </div>
            </div>
        </div>
    )
}