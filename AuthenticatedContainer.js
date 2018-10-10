"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _unauthorisedComponentWrapper = _interopRequireDefault(require("./unauthorisedComponentWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AuthenticatedContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(AuthenticatedContainer, _Component);

  function AuthenticatedContainer(props, context) {
    var _this;

    _classCallCheck(this, AuthenticatedContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthenticatedContainer).call(this, props, context));

    var notifyMount = props.onAutheticatedComponentMount || context.onAuthenticatedMount || function () {};

    _this.state = {
      notifyMount: notifyMount
    };
    _this.authenticatedComponentMounted = false;
    return _this;
  }

  _createClass(AuthenticatedContainer, [{
    key: "getChildContext",
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
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          unauthorisedComponent = _this$props.unauthorisedComponent;
      var isAuthenticated = this.context.isAuthenticated;

      if (this.authenticatedComponentMounted && !isAuthenticated) {
        var Unauthorised = (0, _unauthorisedComponentWrapper.default)(unauthorisedComponent);
        return _react.default.createElement(Unauthorised, {
          onMount: function onMount() {
            _this3.authenticatedComponentMounted = false;
          }
        });
      }

      return _react.Children.only(children);
    }
  }]);

  return AuthenticatedContainer;
}(_react.Component);

AuthenticatedContainer.propTypes = {
  unauthorisedComponent: _propTypes.default.any,
  onAutheticatedComponentMount: _propTypes.default.func
};
AuthenticatedContainer.contextTypes = {
  isAuthenticated: _propTypes.default.bool.isRequired,
  onAuthenticatedMount: _propTypes.default.func
};
AuthenticatedContainer.childContextTypes = {
  authenticatedComponentWillMount: _propTypes.default.func.isRequired
};
var _default = AuthenticatedContainer;
exports.default = _default;