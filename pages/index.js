/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */
import { Button } from 'react-bootstrap';
// import Logo from '../components/Logo';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
// import Logo from '../components/logo';
// import logoSVG from '../logos/logo.svg';
// import logoPNG from '../logos/logo.png';
// import logoMP4 from '../logos/lyrics.mp4';

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '0px',
        maxWidth: '550px',
        margin: '0 auto',
      }}
    >
      {/* <Logo /> */}
      <h1 className="font-link">Welcome {user.displayName}! </h1>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
