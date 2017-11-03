'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _unauthorisedComponentWrapper = require('./unauthorisedComponentWrapper');

var _unauthorisedComponentWrapper2 = _interopRequireDefault(_unauthorisedComponentWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthenticatedContainer = function (_Component) {
  _inherits(AuthenticatedContainer, _Component);

  function AuthenticatedContainer(props, context) {
    _classCallCheck(this, AuthenticatedContainer);

    var _this = _possibleConstructorReturn(this, (AuthenticatedContainer.__proto__ || Object.getPrototypeOf(AuthenticatedContainer)).call(this, props, context));

    var notifyMount = props.onAutheticatedComponentMount || context.onAuthenticatedMount || function () {};
    _this.state = {
      notifyMount: notifyMount
    };
    _this.authenticatedComponentMounted = false;
    return _this;
  }

  _createClass(AuthenticatedContainer, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      var notifyMount = this.state.notifyMount;
      var isAuthenticated = this.context.isAuthenticated;


      var authenticatedComponentWillMount = function authenticatedComponentWillMount() {
        _this2.authenticatedComponentMounted = true;
        _this2.forceUpdate();
        if (!isAuthenticated) {
          notifyMount();
        }
      };

      return {
        authenticatedComponentWillMount: authenticatedComponentWillMount
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          unauthorisedComponent = _props.unauthorisedComponent;
      var isAuthenticated = this.context.isAuthenticated;

      if (this.authenticatedComponentMounted && !isAuthenticated) {
        var Unauthorised = (0, _unauthorisedComponentWrapper2.default)(unauthorisedComponent);
        return _react2.default.createElement(Unauthorised, { onMount: function onMount() {
            _this3.authenticatedComponentMounted = false;
          } });
      }

      return _react.Children.only(children);
    }
  }]);

  return AuthenticatedContainer;
}(_react.Component);

AuthenticatedContainer.propTypes = {
  unauthorisedComponent: _propTypes2.default.any,
  onAutheticatedComponentMount: _propTypes2.default.func
};

AuthenticatedContainer.contextTypes = {
  isAuthenticated: _propTypes2.default.bool.isRequired,
  onAuthenticatedMount: _propTypes2.default.func
};

AuthenticatedContainer.childContextTypes = {
  authenticatedComponentWillMount: _propTypes2.default.func.isRequired
};

exports.default = AuthenticatedContainer;