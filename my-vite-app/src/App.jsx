import React from 'react';
import ScheduleBoard from './components/ScheduleBoard';
import './App.css'; // Main app styling

function App() {
  const games = [
    {
      id: 1,
      opponent: 'Los Angeles Chargers',
      date: '2023-09-10',
      location: 'Sofi Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      type: 'Regular Season',
    },
    {
      id: 2,
      opponent: 'New England Patriots',
      date: '2023-09-17',
      location: 'Gillette Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      type: 'Regular Season',
    },
    {
      id: 3,
      opponent: 'Denver Broncos',
      date: '2023-09-24',
      location: 'Hard Rock Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      type: 'Regular Season',
    },
    {
      id: 4,
      opponent: 'Buffalo Bills',
      date: '2023-10-01',
      location: 'Highmark Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      type: 'Regular Season',
    },
    {
      id: 5,
      opponent: 'New York Giants',
      date: '2023-10-08',
      location: 'Hard Rock Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      type: 'Regular Season',
    },
    {
      id: 6,
      opponent: 'Carolina Panthers',
      date: '2023-10-15',
      location: 'Hard Rock Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      type: 'Regular Season',
    },
    {
      id: 7,
      opponent: 'Philadelphia Eagles',
      date: '2023-09-21',
      location: 'Gillette Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      type: 'Regular Season',
    },
    {
      id: 8,
      opponent: 'New England Patriots',
      date: '2023-10-29',
      location: 'Hard Rock Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      type: 'Regular Season',
    },
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <img src="https://seeklogo.com/images/M/miami-dolphins-logo-9713AD4C69-seeklogo.com.png" alt="Miami Dolphins Logo" className="logo" />
        <h1>Miami Dolphins Schedule</h1>
      </nav>
      <div className="Schedule-div">
        <ScheduleBoard games={games} />
      </div>
    </div>
  );
}

export default App;
