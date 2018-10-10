import React from 'react';
import PropTypes from 'prop-types';
import './NavigationBar.css';

const NavigationBar = ({ contentOptions, active, onClick }) => (
  <ul className="navigationBar">
    { contentOptions.map((content, index) => (
        <li
          key={index}
          className={active === content.componentName ? 'active' : ''}
        >
          <button onClick={() => onClick(content.componentName)}>
            { content.displayName }
          </button>
        </li>
      ))
    }
  </ul>
);

NavigationBar.propTypes = {
  contentOptions: PropTypes.arrayOf(PropTypes.shape({
    componentName: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
  })).isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavigationBar;
