import { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import './anh-calendar.css'

export default function StyleCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div id="calendar">
            <div className='app-calendar'>
                <h1 className='app-calendar'>Calendar</h1>
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <p className='app-calendar'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
            </div>
        </div>
        
  );
}