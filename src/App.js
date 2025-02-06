import './App.css';
import Calendar from './component/FullCalendar.js';

function App() {
  return (
    <div className="container">
      <div className="upper">
        <div className="left_menu">left_menu</div>
        <div className="main_menu">
          <Calendar />
        </div>
        <div className="right_menu">right_menu</div>
      </div>
      <div className="bottom">
      </div>
    </div>
  );
}

export default App;
