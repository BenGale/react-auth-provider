import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';

const requiresAuthentication = SecureComponent => props => (
  <AuthenticatedComponent>
    <SecureComponent {...props} />
  </AuthenticatedComponent>
);

export default requiresAuthentication;
