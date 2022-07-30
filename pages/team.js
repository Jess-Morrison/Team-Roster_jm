import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getPlayers } from '../api/playerData';
import PlayerCard from '../components/PlayerCard';
import { useAuth } from '../utils/context/authContext';

export default function Team() {
  const [players, setPlayers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getPlayers(user.uid).then(setPlayers);
  },
  [user.uid]);

  return (
    <div className="text-center my-4">
      <Link href="/player/new" passHref>
        <Button>Add A Player</Button>
      </Link>
      <div className="cards">
        {players.map((player) => (
          <PlayerCard key={player.firebaseKey} playerObj={player} onUpdate={getPlayers} />
        ))}
      </div>
      <div className="d-flex flex-wrap" />
    </div>
  );
}
