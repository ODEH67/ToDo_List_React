import React, {useState, useEffect, useRef} from 'react';
import {MdLanguage} from 'react-icons/md';
import './anh.css';

export default function LanguageApp() {
    const [drop, setDrop] = useState(false);
    let langRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if(!langRef.current.contains(e.target)) {
                setDrop(false);
                console.log(langRef.current);
            }
        };

        document.addEventListener("mousedown", handler);
        return() => {
            document.removeEventListener("mousedown", handler);
        }
    } 

    );

    return (
        <div>
            <div className = "drop-container" ref={langRef}>
                <MdLanguage onClick = {() => {setDrop(!drop)}}/>
            </div>
            <div className = {`dropdown-menu ${drop? 'active' : 'inactive'} `}>
                <div className="lang-items"><a >English</a></div>
                <div className="lang-items"><a >German</a></div>
                <div className="lang-items"><a >Japanese</a></div>
            </div>
        </div>
    )
}
