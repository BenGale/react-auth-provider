'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AuthenticatedComponent = require('./AuthenticatedComponent');

var _AuthenticatedComponent2 = _interopRequireDefault(_AuthenticatedComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requiresAuthentication = function requiresAuthentication(SecureComponent) {
  return function (props) {
    return _react2.default.createElement(
      _AuthenticatedComponent2.default,
      null,
      _react2.default.createElement(SecureComponent, props)
    );
  };
};

exports.default = requiresAuthentication;