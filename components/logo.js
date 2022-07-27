/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import logoPNG from '../logos/logo.png';
// import logoMP4 from '../logos/lyrics.mp4';

export default function Logo() {
  return (
    <>
      <div>Logo</div>
      {/* <video loop autoPlay>
        <source
          src={logoMP4}
          type="video/mp4"
        />
      </video> */}
      <img src={logoPNG} alt="Team Logo" />
    </>
  );
}
