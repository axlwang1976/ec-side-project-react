import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../assets/images/crown.svg';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
