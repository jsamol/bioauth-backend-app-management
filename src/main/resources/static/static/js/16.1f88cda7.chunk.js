(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{447:function(e,t,n){"use strict";n.r(t);var r=n(64),o=n(17),s=n(59),c=n(60),a=n(62),u=n(61),i=n(63),d=n(113),p=n(1),h=n.n(p),k=n(339),f=n.n(k),l=n(117),R=n(27),b=n(170),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(a.a)(this,Object(u.a)(t).call(this,e))).onRequestIntercepted=n.onRequestIntercepted.bind(Object(d.a)(Object(d.a)(n))),n.onRequestErrorIntercepted=n.onRequestErrorIntercepted.bind(Object(d.a)(Object(d.a)(n))),n.onResponseIntercepted=n.onResponseIntercepted.bind(Object(d.a)(Object(d.a)(n))),n.onResponseErrorIntercepted=n.onResponseErrorIntercepted.bind(Object(d.a)(Object(d.a)(n))),n.state={tokenRefreshed:!1},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.registerInterceptor(this.onRequestIntercepted,this.onRequestErrorIntercepted,this.onResponseIntercepted,this.onResponseErrorIntercepted);var t=f()("/keycloak.json");t.init({onLoad:"login-required"}).success(function(n){e.props.setKeycloak(t)}).error(function(){console.log("Authentication: error")})}},{key:"onRequestIntercepted",value:function(e,t){return this.props.authenticated&&(t.headers[R.c.AUTHORIZATION]="Bearer ".concat(this.props.keycloak.token)),t.method!==R.d.POST&&t.method!==R.d.PUT||(t.headers[R.c.XSRF_TOKEN]=this.props.cookies.get("XSRF-TOKEN"),t.credentials="include"),[e,t]}},{key:"onRequestErrorIntercepted",value:function(e){return e}},{key:"onResponseIntercepted",value:function(e){var t=this;return e.status!==R.e.UNAUTHORIZED||this.state.tokenRefreshed?e.status===R.e.UNAUTHORIZED&&this.state.tokenRefreshed?this.onTokenRefreshError():this.state.tokenRefreshed&&this.setState({tokenRefreshed:!1}):this.props.keycloak.updateToken(R.f).success(function(e){return t.onTokenRefresh()}).error(function(e){return t.onTokenRefreshError()}),e}},{key:"onResponseErrorIntercepted",value:function(e){return e}},{key:"onTokenRefresh",value:function(){this.setState({tokenRefreshed:!0}),l.a.request()}},{key:"onTokenRefreshError",value:function(){l.a.unregisterRequest(),this.setState({tokenRefreshed:!1}),this.props.deleteKeycloak()}},{key:"render",value:function(){return h.a.createElement("div",null,this.props.children)}}]),t}(p.Component);O.defaultProps={};var I=Object(b.b)(O),j=Object(r.b)(function(e){return{keycloak:e.keycloak,authenticated:null!==e.keycloak}},function(e){return{setKeycloak:function(t){return e(Object(o.f)(t))},deleteKeycloak:function(){return e(Object(o.c)())}}})(I);t.default=j}}]);
//# sourceMappingURL=16.1f88cda7.chunk.js.map