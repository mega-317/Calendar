import React, { Component } from 'react';
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Calendar() {
  return (
    <div style={{ width: "100%", height: "100%"}}>
      <FullCalendar
        className='background'
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2025-02-01' },
          { title: 'event 2', date: '2025-02-02' }
        ]}
        height="100%"
      />
    </div>
  )
}

export default Calendar;