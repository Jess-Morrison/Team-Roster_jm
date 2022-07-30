import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSinglePlayer } from '../../../api/playerData';
import PlayerForm from '../../../components/PlayerForm';

export default function EditPlayer() {
  const [editPlayerItem, setEditPlayerItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSinglePlayer(firebaseKey).then(setEditPlayerItem);
  }, [firebaseKey]);

  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <PlayerForm obj={editPlayerItem} />
    </div>
  );
}
