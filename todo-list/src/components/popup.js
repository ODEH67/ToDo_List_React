import React, { useState } from 'react';
import { useRef } from 'react';
import './anh.css';
import {RiAccountPinCircleFill} from 'react-icons/ri';
import PassInfo from './info';
//import LoginApp from './login';


export default function Popup() {
  const [popup, setPopup] = useState(false);
  const handleClickOpen = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };

  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem('emailData');
  const getPassword = localStorage.getItem('passwordData');

  const handleClick = () => {
    if (email.current.value === 'anhchau8922@gmail.com' && password.current.value === '12345') {
      localStorage.setItem('emailData', 'anhchau8922@gmail.com');
      localStorage.setItem('passwordData', '12345');
    }
  };

  const getInfo = () => {
    return getEmail && getPassword ? <PassInfo /> : null;
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        <RiAccountPinCircleFill />
      </div>
      <div>{popup ? <div className="mainpopup">
          <div className="popup">
            <div className="popup-header">
              <h2>Login</h2>
              <h1 onClick={closePopup}>X</h1>
            </div>
            <form>
              <label>
                Email:
                <input type="text" ref={email} />
              </label>
              <label>
                Password:
                <input type="password" ref={password} />
              </label>
              <button onClick={handleClick}>Login</button>
            </form>
            {getInfo()}
          </div>
        </div> : ''}
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { useRef } from 'react';
// import './anh.css';
// import {RiAccountPinCircleFill} from 'react-icons/ri';
// import PassInfo from './info';
// //import LoginApp from './login';



// export default function Popup() {
//     const [popup, setPopup] = useState(false);
//     const handleClickOpen = () => {
//         setPopup(!popup)
//     }
//     const closePopup = () => {
//         setPopup(false)
//     }

//     const email=useRef()
//     const password=useRef()
//     const getEmail=localStorage.getItem("emailData")
//     const getPassword=localStorage.getItem("passwordData")
//     const handleClick=()=>{
//         if(email.current.value=="anhchau8922@gmail.com"&&password.current.value=="12345"){
//             localStorage.setItem("emailData","anhchau8922@gmail.com")
//             localStorage.setItem("passwordData","12345")
//         }
//     }   
//     const getInfo = () => {
//         getEmail && getPassword ? <PassInfo /> : null
//     }

//     return(
//         <div>
//             <div onClick={handleClickOpen}><RiAccountPinCircleFill /></div>
//             <div>
//                 {popup ?
//                     <div className="mainpopup">
//                         <div className="popup">
//                             <div className="popup-header">
//                                 <h2>Login</h2>
//                                 <h1 onClick={closePopup}>X</h1>
//                             </div>
//                             <form>
                                
//                                 <label>Email:
//                                     <input type="text" ref={email} />
//                                 </label>
//                                 <label>Password:
//                                     <input type="password" ref={password} />
//                                 </label>
//                                 <button onClick={handleClick}>Login</button>
//                             </form> 
//                             {getInfo()} 
//                         </div>
//                     </div>:""}
//             </div>
//         </div>
//     )
// }
