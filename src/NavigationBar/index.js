import React, { PropTypes } from 'react';
import './NavigationBar.css';

const NavigationBar = ({ active, onClick }) => (
  <ul className="navigationBar">
    <li className={active === 'insecure' ? 'active' : ''}>
      <a href="#" onClick={() => onClick('insecure')}>
        Insecure Component
      </a>
    </li>
    <li className={active === 'secure' ? 'active' : ''}>
      <a href="#" onClick={() => onClick('secure')}>
        Secure Component
      </a>
    </li>
  </ul>
);

NavigationBar.propTypes = {
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavigationBar;
