(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{445:function(e,t,a){"use strict";a.r(t);var r=a(59),o=a(60),i=a(62),n=a(61),l=a(63),p=a(113),s=a(1),c=a.n(s),d=a(338),u=a(294),b=a(290),m=a(288),h=a(349),f=a(443),g=a(115),E=c.a.lazy(function(){return a.e(9).then(a.bind(null,314))}),S={labels:[],datasets:[{label:"BioAuth Usage",fill:!1,lineTension:.1,backgroundColor:"rgba(32, 168, 216, 0.4)",borderColor:"rgba(32, 168, 216, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},v={tooltips:{enabled:!1,custom:f.CustomTooltips},maintainAspectRatio:!1},y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(n.a)(t).call(this,e))).toggleSecretVisibility=a.toggleSecretVisibility.bind(Object(p.a)(Object(p.a)(a))),a.redirectToAppDetails=a.redirectToAppDetails.bind(Object(p.a)(Object(p.a)(a))),a.state={appSecretShown:!1},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"toggleSecretVisibility",value:function(){var e=this.state.appSecretShown;this.setState({appSecretShown:!e})}},{key:"redirectToAppDetails",value:function(){this.props.history.push(g.a.getAppDetailsPath(this.props.app))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(b.a,{xl:"6"},c.a.createElement(u.a,null,c.a.createElement(b.a,null,this.props.app.description&&c.a.createElement("p",{className:"text-justify"},this.props.app.description))),c.a.createElement(u.a,null,c.a.createElement(b.a,{sm:"8"},c.a.createElement(E,{appId:this.props.app.appId,appSecret:this.props.app.appSecret}))),c.a.createElement(u.a,null,c.a.createElement(b.a,{lg:"8",md:"12",className:"mt-4 mb-4"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(m.a,{color:"ghost-primary",onClick:this.redirectToAppDetails},"More Info"))))),c.a.createElement(b.a,{xl:"6"},this.props.isOpened&&c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(h.a,{data:S,options:v})))))}}]),t}(s.Component);y.defaultProps={},t.default=Object(d.a)(y)}}]);
//# sourceMappingURL=13.3dc91712.chunk.js.map