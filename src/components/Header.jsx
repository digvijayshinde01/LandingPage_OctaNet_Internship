import Logo from '../assets/logo.png';
import './header.css';
import Bar from '../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="home">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            background: 'gray',
            padding: '0.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bar} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className="header__menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Why Us"
              spy={true}
              smooth={true}
            >
              {' '}
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          
        </ul>
      )}
    </div>
  );
};
export default Header;
