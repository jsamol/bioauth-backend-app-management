(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{289:function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},339:function(e,r,t){(function(e){var t;!function(n,o){var s=function e(r){if(!(this instanceof e))return new e(r);for(var t,s,i=this,c=[],a={enable:!0,callbackList:[],interval:5},u=document.getElementsByTagName("script"),l=0;l<u.length;l++)-1===u[l].src.indexOf("keycloak.js")&&-1===u[l].src.indexOf("keycloak.min.js")||-1===u[l].src.indexOf("version=")||(i.iframeVersion=u[l].src.substring(u[l].src.indexOf("version=")+8).split("&")[0]);var d=!0;function f(){return"undefined"!==typeof i.authServerUrl?"/"==i.authServerUrl.charAt(i.authServerUrl.length-1)?i.authServerUrl+"realms/"+encodeURIComponent(i.realm):i.authServerUrl+"/realms/"+encodeURIComponent(i.realm):o}function p(e,r){var t=e.code,n=e.error,o=e.prompt,s=(new Date).getTime();if(n)if("none"!=o){var c={error:n,error_description:e.error_description};i.onAuthError&&i.onAuthError(c),r&&r.setError(c)}else r&&r.setSuccess();else if("standard"!=i.flow&&(e.access_token||e.id_token)&&f(e.access_token,null,e.id_token,!0),"implicit"!=i.flow&&t){var a="code="+t+"&grant_type=authorization_code",u=i.endpoints.token(),l=new XMLHttpRequest;l.open("POST",u,!0),l.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.clientId&&i.clientSecret?l.setRequestHeader("Authorization","Basic "+btoa(i.clientId+":"+i.clientSecret)):a+="&client_id="+encodeURIComponent(i.clientId),a+="&redirect_uri="+e.redirectUri,l.withCredentials=!0,l.onreadystatechange=function(){if(4==l.readyState)if(200==l.status){var e=JSON.parse(l.responseText);f(e.access_token,e.refresh_token,e.id_token,"standard"===i.flow),y()}else i.onAuthError&&i.onAuthError(),r&&r.setError()},l.send(a)}function f(t,n,o,c){m(t,n,o,s=(s+(new Date).getTime())/2),d&&(i.tokenParsed&&i.tokenParsed.nonce!=e.storedNonce||i.refreshTokenParsed&&i.refreshTokenParsed.nonce!=e.storedNonce||i.idTokenParsed&&i.idTokenParsed.nonce!=e.storedNonce)?(console.info("[KEYCLOAK] Invalid nonce, clearing token"),i.clearToken(),r&&r.setError()):c&&(i.onAuthSuccess&&i.onAuthSuccess(),r&&r.setSuccess())}}function h(e){return 0==e.status&&e.responseText&&e.responseURL.startsWith("file:")}function m(e,r,t,n){if(i.tokenTimeoutHandle&&(clearTimeout(i.tokenTimeoutHandle),i.tokenTimeoutHandle=null),r?(i.refreshToken=r,i.refreshTokenParsed=k(r)):(delete i.refreshToken,delete i.refreshTokenParsed),t?(i.idToken=t,i.idTokenParsed=k(t)):(delete i.idToken,delete i.idTokenParsed),e){if(i.token=e,i.tokenParsed=k(e),i.sessionId=i.tokenParsed.session_state,i.authenticated=!0,i.subject=i.tokenParsed.sub,i.realmAccess=i.tokenParsed.realm_access,i.resourceAccess=i.tokenParsed.resource_access,n&&(i.timeSkew=Math.floor(n/1e3)-i.tokenParsed.iat),null!=i.timeSkew&&(console.info("[KEYCLOAK] Estimated time difference between browser and server is "+i.timeSkew+" seconds"),i.onTokenExpired)){var o=1e3*(i.tokenParsed.exp-(new Date).getTime()/1e3+i.timeSkew);console.info("[KEYCLOAK] Token expires in "+Math.round(o/1e3)+" s"),o<=0?i.onTokenExpired():i.tokenTimeoutHandle=setTimeout(i.onTokenExpired,o)}}else delete i.token,delete i.tokenParsed,delete i.subject,delete i.realmAccess,delete i.resourceAccess,i.authenticated=!1}function k(e){switch((e=(e=(e=e.split(".")[1]).replace("/-/g","+")).replace("/_/g","/")).length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Invalid token"}return e=(e=(e+"===").slice(0,e.length+e.length%4)).replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(escape(atob(e))),e=JSON.parse(e)}function g(){for(var e=[],r=0;r<36;r++)e[r]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function v(e){var r=function(e){var r;switch(i.flow){case"standard":r=["code","state","session_state"];break;case"implicit":r=["access_token","token_type","id_token","state","session_state","expires_in"];break;case"hybrid":r=["access_token","id_token","code","state","session_state"]}r.push("error"),r.push("error_description"),r.push("error_uri");var t,n,o=e.indexOf("?"),s=e.indexOf("#");"query"===i.responseMode&&-1!==o?(t=e.substring(0,o),""!==(n=b(e.substring(o+1,-1!==s?s:e.length),r)).paramsString&&(t+="?"+n.paramsString),-1!==s&&(t+=e.substring(s))):"fragment"===i.responseMode&&-1!==s&&(t=e.substring(0,s),""!==(n=b(e.substring(s+1),r)).paramsString&&(t+="#"+n.paramsString));if(n&&n.oauthParams)if("standard"===i.flow||"hybrid"===i.flow){if((n.oauthParams.code||n.oauthParams.error)&&n.oauthParams.state)return n.oauthParams.newUrl=t,n.oauthParams}else if("implicit"===i.flow&&(n.oauthParams.access_token||n.oauthParams.error)&&n.oauthParams.state)return n.oauthParams.newUrl=t,n.oauthParams}(e);if(r){var t=s.get(r.state);return t&&(r.valid=!0,r.redirectUri=t.redirectUri,r.storedNonce=t.nonce,r.prompt=t.prompt),r}}function b(e,r){for(var t=e.split("&"),n={paramsString:"",oauthParams:{}},o=0;o<t.length;o++){var s=t[o].split("=");-1!==r.indexOf(s[0])?n.oauthParams[s[0]]=s[1]:(""!==n.paramsString&&(n.paramsString+="&"),n.paramsString+=t[o])}return n}function w(e){return!e&&i.useNativePromise?function(){var e={setSuccess:function(r){e.resolve(r)},setError:function(r){e.reject(r)}};return e.promise=new Promise(function(r,t){e.resolve=r,e.reject=t}),e}():function(){var e={setSuccess:function(r){e.success=!0,e.result=r,e.successCallback&&e.successCallback(r)},setError:function(r){e.error=!0,e.result=r,e.errorCallback&&e.errorCallback(r)},promise:{success:function(r){return e.success?r(e.result):e.error||(e.successCallback=r),e.promise},error:function(r){return e.error?r(e.result):e.success||(e.errorCallback=r),e.promise}}};return e}()}function S(){var e=w(!0);if(!a.enable)return e.setSuccess(),e.promise;if(a.iframe)return e.setSuccess(),e.promise;var r=document.createElement("iframe");a.iframe=r,r.onload=function(){var r=i.endpoints.authorize();"/"===r.charAt(0)?a.iframeOrigin=n.location.origin?n.location.origin:n.location.protocol+"//"+n.location.hostname+(n.location.port?":"+n.location.port:""):a.iframeOrigin=r.substring(0,r.indexOf("/",8)),e.setSuccess()};var t=i.endpoints.checkSessionIframe();r.setAttribute("src",t),r.setAttribute("title","keycloak-session-iframe"),r.style.display="none",document.body.appendChild(r);return n.addEventListener("message",function(e){if(e.origin===a.iframeOrigin&&a.iframe.contentWindow===e.source&&("unchanged"==e.data||"changed"==e.data||"error"==e.data)){"unchanged"!=e.data&&i.clearToken();for(var r=a.callbackList.splice(0,a.callbackList.length),t=r.length-1;t>=0;--t){var n=r[t];"error"==e.data?n.setError():n.setSuccess("unchanged"==e.data)}}},!1),e.promise}function y(){a.enable&&i.token&&setTimeout(function(){U().success(function(e){e&&y()})},1e3*a.interval)}function U(){var e=w(!0);if(a.iframe&&a.iframeOrigin){var r=i.clientId+" "+(i.sessionId?i.sessionId:"");a.callbackList.push(e);var t=a.iframeOrigin;1==a.callbackList.length&&a.iframe.contentWindow.postMessage(r,t)}else e.setSuccess();return e.promise}function I(e){if(!e||"default"==e)return{login:function(e){return n.location.replace(i.createLoginUrl(e)),w().promise},logout:function(e){return n.location.replace(i.createLogoutUrl(e)),w().promise},register:function(e){return n.location.replace(i.createRegisterUrl(e)),w().promise},accountManagement:function(){var e=i.createAccountUrl();if("undefined"===typeof e)throw"Not supported by the OIDC server";return n.location.href=e,w(!1).promise},redirectUri:function(e,r){return 1==arguments.length&&(r=!0),e&&e.redirectUri?e.redirectUri:i.redirectUri?i.redirectUri:location.href}};if("cordova"==e){a.enable=!1;var r=function(e,r,t){return n.cordova&&n.cordova.InAppBrowser?n.cordova.InAppBrowser.open(e,r,t):n.open(e,r,t)},t=function(e){var r=function(e){return e&&e.cordovaOptions?Object.keys(e.cordovaOptions).reduce(function(r,t){return r[t]=e.cordovaOptions[t],r},{}):{}}(e);return r.location="no",e&&"none"==e.prompt&&(r.hidden="yes"),function(e){return Object.keys(e).reduce(function(r,t){return r.push(t+"="+e[t]),r},[]).join(",")}(r)};return{login:function(e){var n=w(!1),o=t(e),s=i.createLoginUrl(e),c=r(s,"_blank",o),a=!1,u=!1,l=function(){u=!0,c.close()};return c.addEventListener("loadstart",function(e){0==e.url.indexOf("http://localhost")&&(p(v(e.url),n),l(),a=!0)}),c.addEventListener("loaderror",function(e){a||(0==e.url.indexOf("http://localhost")?(p(v(e.url),n),l(),a=!0):(n.setError(),l()))}),c.addEventListener("exit",function(e){u||n.setError({reason:"closed_by_user"})}),n.promise},logout:function(e){var t,n=w(!1),o=i.createLogoutUrl(e),s=r(o,"_blank","location=no,hidden=yes");return s.addEventListener("loadstart",function(e){0==e.url.indexOf("http://localhost")&&s.close()}),s.addEventListener("loaderror",function(e){0==e.url.indexOf("http://localhost")?s.close():(t=!0,s.close())}),s.addEventListener("exit",function(e){t?n.setError():(i.clearToken(),n.setSuccess())}),n.promise},register:function(){var e=i.createRegisterUrl(),n=t(options),o=r(e,"_blank",n);o.addEventListener("loadstart",function(e){0==e.url.indexOf("http://localhost")&&o.close()})},accountManagement:function(){var e=i.createAccountUrl();if("undefined"===typeof e)throw"Not supported by the OIDC server";var t=r(e,"_blank","location=no");t.addEventListener("loadstart",function(e){0==e.url.indexOf("http://localhost")&&t.close()})},redirectUri:function(e){return"http://localhost"}}}if("cordova-native"==e)return a.enable=!1,{login:function(e){var r=w(!1),t=i.createLoginUrl(e);return universalLinks.subscribe("keycloak",function(e){universalLinks.unsubscribe("keycloak"),n.cordova.plugins.browsertab.close(),p(v(e.url),r)}),n.cordova.plugins.browsertab.openUrl(t),r.promise},logout:function(e){var r=w(!1),t=i.createLogoutUrl(e);return universalLinks.subscribe("keycloak",function(e){universalLinks.unsubscribe("keycloak"),n.cordova.plugins.browsertab.close(),i.clearToken(),r.setSuccess()}),n.cordova.plugins.browsertab.openUrl(t),r.promise},register:function(e){var r=w(!1),t=i.createRegisterUrl(e);return universalLinks.subscribe("keycloak",function(e){universalLinks.unsubscribe("keycloak"),n.cordova.plugins.browsertab.close(),p(v(e.url),r)}),n.cordova.plugins.browsertab.openUrl(t),r.promise},accountManagement:function(){var e=i.createAccountUrl();if("undefined"===typeof e)throw"Not supported by the OIDC server";n.cordova.plugins.browsertab.openUrl(e)},redirectUri:function(e){return e&&e.redirectUri?e.redirectUri:i.redirectUri?i.redirectUri:"http://localhost"}};throw"invalid adapter type: "+e}i.init=function(e){i.authenticated=!1,s=function(){try{return new T}catch(e){}return new _}();if(t=e&&["default","cordova","cordova-native"].indexOf(e.adapter)>-1?I(e.adapter):e&&"object"===typeof e.adapter?e.adapter:n.Cordova||n.cordova?I("cordova"):I(),e){if("undefined"!==typeof e.useNonce&&(d=e.useNonce),"undefined"!==typeof e.checkLoginIframe&&(a.enable=e.checkLoginIframe),e.checkLoginIframeInterval&&(a.interval=e.checkLoginIframeInterval),"native"===e.promiseType?i.useNativePromise="function"===typeof Promise:i.useNativePromise=!1,"login-required"===e.onLoad&&(i.loginRequired=!0),e.responseMode){if("query"!==e.responseMode&&"fragment"!==e.responseMode)throw"Invalid value for responseMode";i.responseMode=e.responseMode}if(e.flow){switch(e.flow){case"standard":i.responseType="code";break;case"implicit":i.responseType="id_token token";break;case"hybrid":i.responseType="code id_token token";break;default:throw"Invalid value for flow"}i.flow=e.flow}null!=e.timeSkew&&(i.timeSkew=e.timeSkew),e.redirectUri&&(i.redirectUri=e.redirectUri)}i.responseMode||(i.responseMode="fragment"),i.responseType||(i.responseType="code",i.flow="standard");var o=w(!1),c=w(!0);c.promise.success(function(){i.onReady&&i.onReady(i.authenticated),o.setSuccess(i.authenticated)}).error(function(e){o.setError(e)});var u=function(e){var t,n=w(!0);r?"string"===typeof r&&(t=r):t="keycloak.json";function o(e){i.endpoints=e?{authorize:function(){return e.authorization_endpoint},token:function(){return e.token_endpoint},logout:function(){if(!e.end_session_endpoint)throw"Not supported by the OIDC server";return e.end_session_endpoint},checkSessionIframe:function(){if(!e.check_session_iframe)throw"Not supported by the OIDC server";return e.check_session_iframe},register:function(){throw'Redirection to "Register user" page not supported in standard OIDC mode'},userinfo:function(){if(!e.userinfo_endpoint)throw"Not supported by the OIDC server";return e.userinfo_endpoint}}:{authorize:function(){return f()+"/protocol/openid-connect/auth"},token:function(){return f()+"/protocol/openid-connect/token"},logout:function(){return f()+"/protocol/openid-connect/logout"},checkSessionIframe:function(){var e=f()+"/protocol/openid-connect/login-status-iframe.html";return i.iframeVersion&&(e=e+"?version="+i.iframeVersion),e},register:function(){return f()+"/protocol/openid-connect/registrations"},userinfo:function(){return f()+"/protocol/openid-connect/userinfo"}}}if(t){var s=new XMLHttpRequest;s.open("GET",t,!0),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status||h(s)){var e=JSON.parse(s.responseText);i.authServerUrl=e["auth-server-url"],i.realm=e.realm,i.clientId=e.resource,i.clientSecret=(e.credentials||{}).secret,o(null),n.setSuccess()}else n.setError()},s.send()}else{if(!r.clientId)throw"clientId missing";i.clientId=r.clientId,i.clientSecret=(r.credentials||{}).secret;var c=r.oidcProvider;if(c)if("string"===typeof c){var a;a="/"==c.charAt(c.length-1)?c+".well-known/openid-configuration":c+"/.well-known/openid-configuration";var s=new XMLHttpRequest;s.open("GET",a,!0),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status||h(s)){var e=JSON.parse(s.responseText);o(e),n.setSuccess()}else n.setError()},s.send()}else o(c),n.setSuccess();else{if(!r.url)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++)if(u[l].src.match(/.*keycloak\.js/)){r.url=u[l].src.substr(0,u[l].src.indexOf("/js/keycloak.js"));break}if(!r.realm)throw"realm missing";i.authServerUrl=r.url,i.realm=r.realm,o(null),n.setSuccess()}}return n.promise}();function l(){var r=function(e){e||(t.prompt="none"),i.login(t).success(function(){c.setSuccess()}).error(function(){c.setError()})},t={};switch(e.onLoad){case"check-sso":a.enable?S().success(function(){U().success(function(e){e?c.setSuccess():r(!1)}).error(function(){c.setError()})}):r(!1);break;case"login-required":r(!0);break;default:throw"Invalid value for onLoad"}}return u.success(function(){var r=v(n.location.href);if(r&&n.history.replaceState(n.history.state,null,r.newUrl),r&&r.valid)return S().success(function(){p(r,c)}).error(function(e){c.setError()});e?e.token&&e.refreshToken?(m(e.token,e.refreshToken,e.idToken),a.enable?S().success(function(){U().success(function(e){e?(i.onAuthSuccess&&i.onAuthSuccess(),c.setSuccess(),y()):c.setSuccess()}).error(function(){c.setError()})}):i.updateToken(-1).success(function(){i.onAuthSuccess&&i.onAuthSuccess(),c.setSuccess()}).error(function(){i.onAuthError&&i.onAuthError(),e.onLoad?l():c.setError()})):e.onLoad?l():c.setSuccess():c.setSuccess()}),u.error(function(){o.setError()}),o.promise},i.login=function(e){return t.login(e)},i.createLoginUrl=function(e){var r,n,o=g(),c=g(),a=t.redirectUri(e),u={state:o,nonce:c,redirectUri:encodeURIComponent(a)};e&&e.prompt&&(u.prompt=e.prompt),s.add(u),r=e&&"register"==e.action?i.endpoints.register():i.endpoints.authorize(),n=e&&e.scope?-1!=e.scope.indexOf("openid")?e.scope:"openid "+e.scope:"openid";var l=r+"?client_id="+encodeURIComponent(i.clientId)+"&redirect_uri="+encodeURIComponent(a)+"&state="+encodeURIComponent(o)+"&response_mode="+encodeURIComponent(i.responseMode)+"&response_type="+encodeURIComponent(i.responseType)+"&scope="+encodeURIComponent(n);return d&&(l=l+"&nonce="+encodeURIComponent(c)),e&&e.prompt&&(l+="&prompt="+encodeURIComponent(e.prompt)),e&&e.maxAge&&(l+="&max_age="+encodeURIComponent(e.maxAge)),e&&e.loginHint&&(l+="&login_hint="+encodeURIComponent(e.loginHint)),e&&e.idpHint&&(l+="&kc_idp_hint="+encodeURIComponent(e.idpHint)),e&&e.locale&&(l+="&ui_locales="+encodeURIComponent(e.locale)),e&&e.kcLocale&&(l+="&kc_locale="+encodeURIComponent(e.kcLocale)),l},i.logout=function(e){return t.logout(e)},i.createLogoutUrl=function(e){return i.endpoints.logout()+"?redirect_uri="+encodeURIComponent(t.redirectUri(e,!1))},i.register=function(e){return t.register(e)},i.createRegisterUrl=function(e){return e||(e={}),e.action="register",i.createLoginUrl(e)},i.createAccountUrl=function(e){var r=f(),n=o;return"undefined"!==typeof r&&(n=r+"/account?referrer="+encodeURIComponent(i.clientId)+"&referrer_uri="+encodeURIComponent(t.redirectUri(e))),n},i.accountManagement=function(){return t.accountManagement()},i.hasRealmRole=function(e){var r=i.realmAccess;return!!r&&r.roles.indexOf(e)>=0},i.hasResourceRole=function(e,r){if(!i.resourceAccess)return!1;var t=i.resourceAccess[r||i.clientId];return!!t&&t.roles.indexOf(e)>=0},i.loadUserProfile=function(){var e=f()+"/account",r=new XMLHttpRequest;r.open("GET",e,!0),r.setRequestHeader("Accept","application/json"),r.setRequestHeader("Authorization","bearer "+i.token);var t=w(!1);return r.onreadystatechange=function(){4==r.readyState&&(200==r.status?(i.profile=JSON.parse(r.responseText),t.setSuccess(i.profile)):t.setError())},r.send(),t.promise},i.loadUserInfo=function(){var e=i.endpoints.userinfo(),r=new XMLHttpRequest;r.open("GET",e,!0),r.setRequestHeader("Accept","application/json"),r.setRequestHeader("Authorization","bearer "+i.token);var t=w(!1);return r.onreadystatechange=function(){4==r.readyState&&(200==r.status?(i.userInfo=JSON.parse(r.responseText),t.setSuccess(i.userInfo)):t.setError())},r.send(),t.promise},i.isTokenExpired=function(e){if(!i.tokenParsed||!i.refreshToken&&"implicit"!=i.flow)throw"Not authenticated";if(null==i.timeSkew)return console.info("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"),!0;var r=i.tokenParsed.exp-Math.ceil((new Date).getTime()/1e3)+i.timeSkew;return e&&(r-=e),r<0},i.updateToken=function(e){var r=w(!1);if(!i.refreshToken)return r.setError(),r.promise;e=e||5;var t=function(){var t=!1;if(-1==e?(t=!0,console.info("[KEYCLOAK] Refreshing token: forced refresh")):i.tokenParsed&&!i.isTokenExpired(e)||(t=!0,console.info("[KEYCLOAK] Refreshing token: token expired")),t){var n="grant_type=refresh_token&refresh_token="+i.refreshToken,o=i.endpoints.token();if(c.push(r),1==c.length){var s=new XMLHttpRequest;s.open("POST",o,!0),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.withCredentials=!0,i.clientId&&i.clientSecret?s.setRequestHeader("Authorization","Basic "+btoa(i.clientId+":"+i.clientSecret)):n+="&client_id="+encodeURIComponent(i.clientId);var a=(new Date).getTime();s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status){console.info("[KEYCLOAK] Token refreshed"),a=(a+(new Date).getTime())/2;var e=JSON.parse(s.responseText);m(e.access_token,e.refresh_token,e.id_token,a),i.onAuthRefreshSuccess&&i.onAuthRefreshSuccess();for(var r=c.pop();null!=r;r=c.pop())r.setSuccess(!0)}else{console.warn("[KEYCLOAK] Failed to refresh token"),400==s.status&&i.clearToken(),i.onAuthRefreshError&&i.onAuthRefreshError();for(r=c.pop();null!=r;r=c.pop())r.setError(!0)}},s.send(n)}}else r.setSuccess(!1)};a.enable?U().success(function(){t()}).error(function(){r.setError()}):t();return r.promise},i.clearToken=function(){i.token&&(m(null,null,null),i.onAuthLogout&&i.onAuthLogout(),i.loginRequired&&i.login())},i.callback_id=0;var T=function e(){if(!(this instanceof e))return new e;localStorage.setItem("kc-test","test"),localStorage.removeItem("kc-test");function r(){for(var e=(new Date).getTime(),r=0;r<localStorage.length;r++){var t=localStorage.key(r);if(t&&0==t.indexOf("kc-callback-")){var n=localStorage.getItem(t);if(n)try{var o=JSON.parse(n).expires;(!o||o<e)&&localStorage.removeItem(t)}catch(s){localStorage.removeItem(t)}}}}this.get=function(e){if(e){var t="kc-callback-"+e,n=localStorage.getItem(t);return n&&(localStorage.removeItem(t),n=JSON.parse(n)),r(),n}},this.add=function(e){r();var t="kc-callback-"+e.state;e.expires=(new Date).getTime()+36e5,localStorage.setItem(t,JSON.stringify(e))}},_=function e(){if(!(this instanceof e))return new e;this.get=function(e){if(e){var o=t("kc-callback-"+e);return n("kc-callback-"+e,"",r(-100)),o?JSON.parse(o):void 0}},this.add=function(e){n("kc-callback-"+e.state,JSON.stringify(e),r(60))},this.removeItem=function(e){n(e,"",r(-100))};var r=function(e){var r=new Date;return r.setTime(r.getTime()+60*e*1e3),r},t=function(e){for(var r=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var o=t[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(r))return o.substring(r.length,o.length)}return""},n=function(e,r,t){var n=e+"="+r+"; expires="+t.toUTCString()+"; ";document.cookie=n}}};e&&"object"===typeof e.exports?e.exports=s:(n.Keycloak=s,(t=function(){return s}.apply(r,[]))===o||(e.exports=t))}(window)}).call(this,t(289)(e))}}]);
//# sourceMappingURL=11.4eed688b.chunk.js.map