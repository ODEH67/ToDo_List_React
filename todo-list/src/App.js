
import Sidebar from './components/sidebar';
import StyleCalendar from "./components/calendar";
//import './App.css';
import './components/anh.css';


function App() {
  return (
    <div className="body">
      <Sidebar />
      <section className="workspace">
        <div id='heading'>logo</div>
        <div>This is where main task display</div>

      </section>  
      <StyleCalendar /> 
    </div>

  );
}

export default App;
