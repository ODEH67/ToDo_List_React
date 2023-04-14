import { RiMenuUnfoldFill } from "react-icons/ri";
import {RiLogoutBoxRLine} from 'react-icons/ri';
import {RiAccountPinCircleFill} from 'react-icons/ri';
import {RiCalendarEventFill} from 'react-icons/ri';
import {RiSettings5Fill} from 'react-icons/ri';
import {MdLanguage} from 'react-icons/md';
import {CgDarkMode} from 'react-icons/cg';
import './App.css';
import './components/anh.css';


function App() {
  return (
    <div className="body">
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
      <section className="workspace">This is where main task display

      </section>
      <section className="calendar">calendar
      </section>
    </div>

  );
}

export default App;
