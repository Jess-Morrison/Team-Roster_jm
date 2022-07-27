/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deletePlayer } from '../api/playerData';

export default function PlayerCard({ playerObj, onUpdate }) {
  const deleteThisPlayer = () => {
    if (window.confirm(`Delete ${playerObj.name}?`)) {
      deletePlayer(playerObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '25rem', margin: '10px' }}>
      <Card.Body>
        <div>Name: {playerObj.name}</div>
        <div>Position: {playerObj.position}</div>
        <Card.Img variant="top" src={playerObj.imageURL} alt={playerObj.name} style={{ height: '400px' }} />
        <Link href={`/player/${playerObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/player/edit/${playerObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Link href="/" passHref>
          <Button variant="danger" onClick={deleteThisPlayer} className="m-2">
            DELETE
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

PlayerCard.propTypes = {
  playerObj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    teamId: PropTypes.string,
    imageURL: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
