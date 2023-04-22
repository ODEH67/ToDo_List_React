import { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import './anh-calendar.css'

export default function StyleCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div className = "calendar">
            <div className='app-calendar'>
                
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <p className='bold'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
            </div>
        </div>
        
  );
}