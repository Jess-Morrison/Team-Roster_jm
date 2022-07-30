/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

// import logoMP4 from '../logos/lyrics.mp4';

export default function Logo() {
  return (
    <>
      <video loop autoPlay>
        <source
          src="./logos/lyrics.mp4"
          type="video/mp4"
        />
      </video>
      {/* <img src="./logos/logo.png" alt="Team Logo" /> */}
    </>
  );
}
