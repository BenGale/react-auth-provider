"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _AuthenticatedComponent = _interopRequireDefault(require("../AuthenticatedComponent"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

it('renders without crashing', function () {
  var context = {
    isAuthenticated: false
  };
  (0, _enzyme.shallow)(_react.default.createElement(_AuthenticatedComponent.default, null, _react.default.createElement("p", null, "Secure Component")), {
    context: context
  });
});
it('does not show the content if not authenticated', function () {
  var context = {
    isAuthenticated: false
  };
  var renderedComponent = (0, _enzyme.shallow)(_react.default.createElement(_AuthenticatedComponent.default, null, _react.default.createElement("p", null, "Secure Component")), {
    context: context
  });
  expect(renderedComponent.children().length).toBe(0);
});
it('shows the content if authenticated', function () {
  var context = {
    isAuthenticated: true
  };
  var renderedComponent = (0, _enzyme.shallow)(_react.default.createElement(_AuthenticatedComponent.default, null, _react.default.createElement("p", null, "Secure Component")), {
    context: context
  });
  expect(renderedComponent.children().length).toBe(1);
});
it('shows the provided component if not authenticated', function () {
  var context = {
    isAuthenticated: false
  };

  var unauthorisedComponent = _react.default.createElement("p", null, "Unauthorised!");

  var renderedComponent = (0, _enzyme.shallow)(_react.default.createElement(_AuthenticatedComponent.default, {
    unauthorisedComponent: unauthorisedComponent
  }, _react.default.createElement("p", null, "Secure Component")), {
    context: context
  });
  expect(renderedComponent.contains(unauthorisedComponent)).toBeTruthy();
});