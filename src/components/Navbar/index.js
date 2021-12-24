import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="header">
      <span className="header__logo">FakeStore</span>
      <button
        className="header__menu"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className="fas fa-bars fa-2x" />
      </button>
      <ul className="header__navbar-desk">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
      {setShowMenu && (
        <ul className={`header__navbar-mob ${showMenu ? 'show' : ''}`}>
          <li className="close">
            <button type="button" onClick={() => setShowMenu(false)}>
              X
            </button>
          </li>
          <Link to="/" onClick={() => setShowMenu(false)}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={() => setShowMenu(false)}>
            <li>About</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
