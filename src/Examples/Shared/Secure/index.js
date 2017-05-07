import React from 'react';
import PropTypes from 'prop-types';

const Secure = ({ logout }) => (
  <div>
    <p>Secure Component Content</p>
    <button
      type="button"
      onClick={() => logout()}
    >
      logout!
    </button>
  </div>
);

Secure.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Secure;
