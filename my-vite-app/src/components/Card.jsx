import React from 'react';
import './Card.css';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={`Game against ${game.opponent}`} />
      <h3>{game.opponent}</h3>
      <h4>{game.date}</h4>
      <p>{game.location}</p> 
      <button onClick={() => window.open("https://www.ticketmaster.com/miami-dolphins-tickets/artist/805964", "_blank")}>View Details</button>
    </div>
  );
}

export default GameCard;