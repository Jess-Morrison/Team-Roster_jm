/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
// import { useAuth } from '../utils/context/authContext';

// In the pages/profile.js page, use the User component you created to display the user information.

// Add the Sign Out button below the user component

export default function User({
  name, email, image, lastLogin,
}) {
  // const { user } = useAuth();
  return (

    <>
      <div>Name {name}</div>
      <div>Email {email}</div>
      <img src={image} alt={name} />
      <div>Last Login {lastLogin}</div>
    </>

  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  name: 'Jess',
  email: 'jmoneyhoney.gmail.com',
  image: 'https://image.shutterstock.com/image-photo/red-fox-animal-600w-789993919.jpg',
  lastLogin: '01/01/2022',
};
