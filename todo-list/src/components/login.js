import React from 'react';
import PassInfo from './info';
import { useRef } from 'react';

export default function LoginApp() {
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleClick=()=>{
        if(email.current.value=="anhchau8922@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","anhchau8922@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }   

    return(
        <div>
            {    
                    getEmail&&getPassword?
                    <PassInfo />:
                    <form>
                        <label>Email:
                            <input type="text" ref={email} />
                        </label>
                        <label>Password:
                            <input type="password" ref={password} />
                        </label>
                            <button onClick = {handleClick}>Login</button>
                    </form>                                                        
                }
        </div>
    ) 
       
    
}