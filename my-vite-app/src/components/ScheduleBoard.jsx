import React from 'react';
import GameCard from './Card';
import './ScheduleBoard.css';

const ScheduleBoard = ({ games }) => {
  return (
    <div className="schedule-board">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default ScheduleBoard;