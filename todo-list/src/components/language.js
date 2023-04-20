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
            <div>
                <MdLanguage />
            </div>
        </div>
    )
}
