'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthenticatedComponent = function (_Component) {
  _inherits(AuthenticatedComponent, _Component);

  function AuthenticatedComponent() {
    _classCallCheck(this, AuthenticatedComponent);

    return _possibleConstructorReturn(this, (AuthenticatedComponent.__proto__ || Object.getPrototypeOf(AuthenticatedComponent)).apply(this, arguments));
  }

  _createClass(AuthenticatedComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _context$authenticate = this.context.authenticatedComponentWillMount,
          authenticatedComponentWillMount = _context$authenticate === undefined ? function () {} : _context$authenticate;


      authenticatedComponentWillMount();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          unauthorisedComponent = _props.unauthorisedComponent;
      var isAuthenticated = this.context.isAuthenticated;


      if (isAuthenticated) {
        return _react.Children.only(children);
      }

      return unauthorisedComponent ? unauthorisedComponent : _react2.default.createElement('div', null);
    }
  }]);

  return AuthenticatedComponent;
}(_react.Component);

;

AuthenticatedComponent.propTypes = {
  unauthorisedComponent: _propTypes2.default.node
};

AuthenticatedComponent.contextTypes = {
  isAuthenticated: _propTypes2.default.bool.isRequired,
  authenticatedComponentWillMount: _propTypes2.default.func
};

exports.default = AuthenticatedComponent;