//import React from 'react';
//import "./2.css"
//import "./calendar.css"
import "./TodoList_odeh_1.css"
import {Tasks} from "./components/Tasks"
import './components/anh.css';
import ProIcon from "./pics/odeh/icon_1.png"

import {MdOutlineDarkMode} from 'react-icons/md'
import {MdOutlineLanguage} from 'react-icons/md'

import Sidebar from './components/sidebar';
import StyleCalendar from "./components/calendar";
import Heading from './components/heading';
//import './App.css';


export default function App() {
  return (
    <>
      <div className='main'>
        <section className="left"><Sidebar /></section>
        <section className="workspace">  
          <Heading />
          <Tasks/>
          
        </section>  
        <StyleCalendar /> 
      </div>

    </>
  )
}






