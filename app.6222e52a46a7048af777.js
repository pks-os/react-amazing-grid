webpackJsonp([0,2],{0:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var n=a("./node_modules/react/react.js"),r=s(n),o=a("./node_modules/react-dom/index.js"),l=s(o),c=a("./node_modules/react-ghfork/dist/react-ghfork.js"),i=s(c),d=a("./src/index.js");a(1),a(3);var u="Amazing-Space-Invader/react-grid-layout";l["default"].render(r["default"].createElement("div",null,r["default"].createElement(i["default"],{project:u,className:"right"}),r["default"].createElement("div",{className:"header"},r["default"].createElement("h1",null,"React-grid-layout"),r["default"].createElement("p",null,"WIP, don't use dat shit now.")),r["default"].createElement("div",null,r["default"].createElement(d.Container,null,r["default"].createElement(d.Row,{className:"demo-row"},r["default"].createElement(d.Col,{lg:3,md:6,sm:12,xs:12,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:3,md:6,sm:12,xs:12,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:3,md:6,sm:12,xs:12,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:3,md:6,sm:12,xs:12,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col"))),r["default"].createElement(d.Row,{className:"demo-row"},r["default"].createElement(d.Col,{lg:4,md:6,sm:6,xs:12,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:4,md:3,sm:6,xs:12,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:4,md:3,sm:12,xs:12,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col"))),r["default"].createElement(d.Row,{className:"demo-row"},r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")),r["default"].createElement(d.Col,{lg:1,md:3,sm:6,xs:2,className:"demo-col"},r["default"].createElement("p",{className:"demo-block"},"Col")))))),document.getElementById("app"))},"./node_modules/react-ghfork/dist/react-ghfork.js":function(e,t,a){!function(t,s){e.exports=s(a("./node_modules/react/react.js"))}(this,function(e){return function(e){function t(s){if(a[s])return a[s].exports;var n=a[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function s(e,t){var a={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(a[s]=e[s]);return a}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},r=a(1);e.exports=r.createClass({displayName:"exports",render:function(){var e=this.props,t=e.text,a=e.style,o=e.project,l=e.className,c=s(e,["text","style","project","className"]);return l=l||"",l+=" github-fork-ribbon-wrapper",t=this.props.text||"Fork me on GitHub",r.createElement("div",{className:l},r.createElement("div",{className:"github-fork-ribbon",style:a},r.createElement("a",n({href:"https://github.com/"+o},c),t)))}})},function(t,a){t.exports=e}])})},"./src/index.js":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var n=a("./src/Container.js"),r=s(n),o=a("./src/Row.js"),l=s(o),c=a("./src/Col.js"),i=s(c);e.exports={Container:r["default"],Row:l["default"],Col:i["default"]}},"./src/Container.js":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),c=a("./node_modules/react/react.js"),i=s(c),d=function(e){function t(e,a){n(this,t);var s=r(this,Object.getPrototypeOf(t).call(this,e,a));return s.state={width:0},s.handleViewportWidth=s.handleViewportWidth.bind(s),s}return o(t,e),l(t,[{key:"handleViewportWidth",value:function(){var e=this;e.setState({width:window.innerWidth})}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleViewportWidth),window.addEventListener("resize",this.handleViewportWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.handleViewportWidth),window.removeEventListener("resize",this.handleViewportWidth)}},{key:"render",value:function(){var e={paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",boxSizing:"border-box"};return this.state.width>1200?e=Object.assign({},e,{width:"1170px"}):this.state.width>992?e=Object.assign({},e,{width:"970px"}):this.state.width>768&&(e=Object.assign({},e,{width:"750px"})),i["default"].createElement("div",{style:e},this.props.children)}}]),t}(i["default"].Component);t["default"]=d},"./src/Row.js":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),i=a("./node_modules/react/react.js"),d=s(i),u=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),c(t,[{key:"render",value:function(){var e={marginRight:"-15px",marginLeft:"-15px",boxSizing:"border-box"};return d["default"].createElement("div",l({style:e},this.props),d["default"].createElement("div",{style:{display:"table"}}),this.props.children,d["default"].createElement("div",{style:{display:"table",clear:"both"}}))}}]),t}(d["default"].Component);t["default"]=u},"./src/Col.js":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),i=a("./node_modules/react/react.js"),d=s(i),u=function(e){function t(e,a){n(this,t);var s=r(this,Object.getPrototypeOf(t).call(this,e,a));return s.state={width:0,xs:0,sm:0,md:0,lg:0},s.handleViewportWidth=s.handleViewportWidth.bind(s),s}return o(t,e),c(t,[{key:"handleViewportWidth",value:function(){var e=this;e.setState({width:window.innerWidth}),e.setState({xs:this.props.xs}),e.setState({sm:this.props.sm}),e.setState({md:this.props.md}),e.setState({lg:this.props.lg})}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleViewportWidth),window.addEventListener("resize",this.handleViewportWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.handleViewportWidth),window.removeEventListener("resize",this.handleViewportWidth)}},{key:"render",value:function(){var e={position:"relative",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px","float":"left",boxSizing:"border-box"};if(this.state.width>1200)switch(this.state.lg){case 1:e=Object.assign({},e,{width:"8.33333333%"});break;case 2:e=Object.assign({},e,{width:"16.66666667%"});break;case 3:e=Object.assign({},e,{width:"25%"});break;case 4:e=Object.assign({},e,{width:"33.33333333%"});break;case 5:e=Object.assign({},e,{width:"41.66666667%"});break;case 6:e=Object.assign({},e,{width:"50%"});break;case 7:e=Object.assign({},e,{width:"58.33333333%"});break;case 8:e=Object.assign({},e,{width:"66.66666667%"});break;case 9:e=Object.assign({},e,{width:"75%"});break;case 10:e=Object.assign({},e,{width:"83.33333333%"});break;case 11:e=Object.assign({},e,{width:"91.66666667%"});break;case 12:e=Object.assign({},e,{width:"100%"})}else if(this.state.width>992)switch(this.state.md){case 1:e=Object.assign({},e,{width:"8.33333333%"});break;case 2:e=Object.assign({},e,{width:"16.66666667%"});break;case 3:e=Object.assign({},e,{width:"25%"});break;case 4:e=Object.assign({},e,{width:"33.33333333%"});break;case 5:e=Object.assign({},e,{width:"41.66666667%"});break;case 6:e=Object.assign({},e,{width:"50%"});break;case 7:e=Object.assign({},e,{width:"58.33333333%"});break;case 8:e=Object.assign({},e,{width:"66.66666667%"});break;case 9:e=Object.assign({},e,{width:"75%"});break;case 10:e=Object.assign({},e,{width:"83.33333333%"});break;case 11:e=Object.assign({},e,{width:"91.66666667%"});break;case 12:e=Object.assign({},e,{width:"100%"})}else if(this.state.width>768)switch(this.state.sm){case 1:e=Object.assign({},e,{width:"8.33333333%"});break;case 2:e=Object.assign({},e,{width:"16.66666667%"});break;case 3:e=Object.assign({},e,{width:"25%"});break;case 4:e=Object.assign({},e,{width:"33.33333333%"});break;case 5:e=Object.assign({},e,{width:"41.66666667%"});break;case 6:e=Object.assign({},e,{width:"50%"});break;case 7:e=Object.assign({},e,{width:"58.33333333%"});break;case 8:e=Object.assign({},e,{width:"66.66666667%"});break;case 9:e=Object.assign({},e,{width:"75%"});break;case 10:e=Object.assign({},e,{width:"83.33333333%"});break;case 11:e=Object.assign({},e,{width:"91.66666667%"});break;case 12:e=Object.assign({},e,{width:"100%"})}else switch(this.state.xs){case 1:e=Object.assign({},e,{width:"8.33333333%"});break;case 2:e=Object.assign({},e,{width:"16.66666667%"});break;case 3:e=Object.assign({},e,{width:"25%"});break;case 4:e=Object.assign({},e,{width:"33.33333333%"});break;case 5:e=Object.assign({},e,{width:"41.66666667%"});break;case 6:e=Object.assign({},e,{width:"50%"});break;case 7:e=Object.assign({},e,{width:"58.33333333%"});break;case 8:e=Object.assign({},e,{width:"66.66666667%"});break;case 9:e=Object.assign({},e,{width:"75%"});break;case 10:e=Object.assign({},e,{width:"83.33333333%"});break;case 11:e=Object.assign({},e,{width:"91.66666667%"});break;case 12:e=Object.assign({},e,{width:"100%"})}return d["default"].createElement("div",l({style:e},this.props),this.props.children)}}]),t}(d["default"].Component);t["default"]=u},1:function(e,t){},3:1});