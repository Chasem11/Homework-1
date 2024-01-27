import React from 'react';
import ScheduleBoard from './components/ScheduleBoard';
import './App.css'; 

function App() {
  const games = [
    {
      id: 1,
      opponent: 'Los Angeles Chargers',
      date: '2023-09-10',
      location: 'Sofi Stadium',
      image: 'https://www.usatoday.com/gcdn/presto/2020/08/23/USAT/f152d46a-e450-447f-a72d-597a6075a54a-USATSI_14806464.jpg?crop=5320,3990,x340,y0',
    },
    {
      id: 2,
      opponent: 'New England Patriots',
      date: '2023-09-17',
      location: 'Gillette Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
    },
    {
      id: 3,
      opponent: 'Denver Broncos',
      date: '2023-09-24',
      location: 'Hard Rock Stadium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Interior_of_updated_Hard_Rock_Stadium.jpg/287px-Interior_of_updated_Hard_Rock_Stadium.jpg',
    },
    {
      id: 4,
      opponent: 'Buffalo Bills',
      date: '2023-10-01',
      location: 'Highmark Stadium',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/Gillette-Stadium-2-1024x768.jpg',
    },
    {
      id: 5,
      opponent: 'New York Giants',
      date: '2023-10-08',
      location: 'Hard Rock Stadium',
      image: 'https://oldstadiumjourney.com/wp-content/uploads/2021/09/Highmark-Stadium-Field.jpg',
    },
    {
      id: 6,
      opponent: 'Carolina Panthers',
      date: '2023-10-15',
      location: 'Hard Rock Stadium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Interior_of_updated_Hard_Rock_Stadium.jpg/287px-Interior_of_updated_Hard_Rock_Stadium.jpg',
    },
    {
      id: 7,
      opponent: 'Philadelphia Eagles',
      date: '2023-09-21',
      location: 'Lincoln Financial Field',
      image: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/eagles/ue0uhnphgnabhcfezdzv',
    },
    {
      id: 8,
      opponent: 'New England Patriots',
      date: '2023-10-29',
      location: 'Hard Rock Stadium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Interior_of_updated_Hard_Rock_Stadium.jpg/287px-Interior_of_updated_Hard_Rock_Stadium.jpg',
    },
    {
      id: 9,
      opponent: 'Kansas City Cheifs',
      date: '2023-11-05',
      location: 'Frankfurt Stadium',
      image: 'https://cdn.whufc.com/sites/default/files/2022-05/FRANKFURT1080.jpg',
    },
    {
      id: 10,
      opponent: 'Las Vegas Raiders',
      date: '2023-11-19',
      location: 'Hard Rock Stadium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Interior_of_updated_Hard_Rock_Stadium.jpg/287px-Interior_of_updated_Hard_Rock_Stadium.jpg',
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
