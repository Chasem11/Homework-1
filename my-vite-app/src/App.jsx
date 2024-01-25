import React from 'react';
import ScheduleBoard from './components/ScheduleBoard';
import './App.css'; // Main app styling

function App() {
  const games = [
    {
      id: 1,
      opponent: 'New England Patriots',
      date: '2023-09-21',
      location: 'Gillette Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
      link: 'link_to_game_details',
      type: 'Regular Season',
    },
    // ... more games
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <img src="https://seeklogo.com/images/M/miami-dolphins-logo-9713AD4C69-seeklogo.com.png" alt="Miami Dolphins Logo" className="logo" />
        <h1>Miami Dolphins Schedule</h1>
      </nav>
      <ScheduleBoard games={games} />
    </div>
  );
}

export default App;
