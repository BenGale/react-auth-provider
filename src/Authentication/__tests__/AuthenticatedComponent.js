import React from 'react';
import { shallow } from 'enzyme';
import AuthenticatedComponent from '../AuthenticatedComponent';

it('renders without crashing', () => {
  const context = { isAuthenticated: false };
  shallow((
    <AuthenticatedComponent>
      <p>Secure Component</p>
    </AuthenticatedComponent>
  ), { context });
});

it('does not show the content if not authenticated', () => {
  const context = { isAuthenticated: false };
  const renderedComponent = shallow((
    <AuthenticatedComponent>
      <p>Secure Component</p>
    </AuthenticatedComponent>
  ), { context });
  expect(renderedComponent.children().length).toBe(0);
});

it('shows the content if authenticated', () => {
  const context = { isAuthenticated: true };
  const renderedComponent = shallow((
    <AuthenticatedComponent>
      <p>Secure Component</p>
    </AuthenticatedComponent>
  ), { context });
  expect(renderedComponent.children().length).toBe(1);
});

it('shows the provided component if not authenticated', () => {
  const context = { isAuthenticated: false };
  const unauthorisedComponent = <p>Unauthorised!</p>;
  const renderedComponent = shallow((
    <AuthenticatedComponent unauthorisedComponent={unauthorisedComponent}>
      <p>Secure Component</p>
    </AuthenticatedComponent>
  ), { context });
  expect(renderedComponent.contains(unauthorisedComponent)).toBeTruthy();
});
