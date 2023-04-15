
import Sidebar from './components/sidebar';
import StyleCalendar from "./components/calendar";
import Heading from './components/heading';
//import './App.css';
import './components/anh.css';


function App() {
  return (
    <body>
      <div className='main'>
        <Sidebar />
        <section className="workspace">
          <Heading />
          <div></div>

        </section>  
        <StyleCalendar /> 
      </div>

    </body>

  );
}

export default App;
