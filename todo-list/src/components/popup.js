import React, { useState } from 'react';
import { useRef } from 'react';
import './anh.css';
import {RiAccountPinCircleFill} from 'react-icons/ri';


export default function Popup() {
    const [popup, setPopup] = useState(false);
    const handleClickOpen = () => {
        setPopup(!popup)
    }
    const closePopup = () => {
        setPopup(false)
    }

    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }

    return(
        <div>
            <div onClick={handleClickOpen}><RiAccountPinCircleFill /></div>
            <div>
                {
                    popup?
                    <div className="mainpopup">
                        <div className="popup">
                            <div className="popup-header">
                                <h2>Login</h2>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <label>Email:
                                    <input type="text" ref={email} />
                                </label>
                                <label>Password:
                                    <input type="password" ref={password} />
                                </label>
                                <button>Login</button>
                            </form>
                            
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}