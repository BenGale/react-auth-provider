"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AuthenticatedComponent = _interopRequireDefault(require("./AuthenticatedComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requiresAuthentication = function requiresAuthentication(SecureComponent) {
  return function (props) {
    return _react.default.createElement(_AuthenticatedComponent.default, null, _react.default.createElement(SecureComponent, props));
  };
};

var _default = requiresAuthentication;
exports.default = _default;