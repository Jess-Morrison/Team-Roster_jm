import React from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="text-center my-4" style={{ height: '45rem' }}>
      <div className="profile-card"> <User
        name={user.displayName}
        email={user.email}
        image={user.photoURL}
        lastLogin={user.metadata.lastSignInTime}
      />
        <button type="button" onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}
