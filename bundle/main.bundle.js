(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/bundle/',b(b.s=335)})({335:function(a,b,c){'use strict';c(336),c(338),c(339),c(346),c(347)},336:function(a,b,c){var d=c(337);'string'==typeof d&&(d=[[a.i,d,'']]);var e,f={hmr:!0};f.transform=e;c(90)(d,f);d.locals&&(a.exports=d.locals),!1},337:function(a,b,c){b=a.exports=c(89)(void 0),b.push([a.i,'/* RGB */\n.primary {\n  color: #016fb9 !important;\n  border-color: #016fb9 !important; }\n\n.primary::before, .primary::after {\n  color: #016fb9 !important;\n  border-color: #016fb9 !important;\n  background: #016fb9 !important; }\n\n.default {\n  color: #353531 !important;\n  border-color: #353531 !important; }\n\n.default::before, .default::after {\n  color: #353531 !important;\n  border-color: #353531 !important;\n  background: #353531 !important; }\n\n.danger {\n  color: #ec4e20 !important;\n  border-color: #ec4e20 !important; }\n\n.danger::before, .danger::after {\n  color: #ec4e20 !important;\n  border-color: #ec4e20 !important;\n  background: #ec4e20 !important; }\n\n.warning {\n  color: #ff9505 !important;\n  border-color: #ff9505 !important; }\n\n.warning::before, .warning::after {\n  color: #ff9505 !important;\n  border-color: #ff9505 !important;\n  background: #ff9505 !important; }\n\n.dark {\n  color: black !important;\n  border-color: black !important; }\n\n.dark::before, .dark::after {\n  color: black !important;\n  border-color: black !important;\n  background: black !important; }\n\n.info {\n  color: #470024 !important;\n  border-color: #470024 !important; }\n\n.info::before, .info::after {\n  color: #470024 !important;\n  border-color: #470024 !important;\n  background: #470024 !important; }\n\n.secondary {\n  color: #6e9075 !important;\n  border-color: #6e9075 !important; }\n\n.secondary::before, .secondary::after {\n  color: #6e9075 !important;\n  border-color: #6e9075 !important;\n  background: #6e9075 !important; }\n\n.secondary {\n  color: #6e9075 !important;\n  border-color: #6e9075 !important; }\n\n.secondary::before, .secondary::after {\n  color: #6e9075 !important;\n  border-color: #6e9075 !important;\n  background: #6e9075 !important; }\n\n.white {\n  color: #fafafa !important;\n  border-color: #fafafa !important; }\n\n.white::before, .white::after {\n  color: #fafafa !important;\n  border-color: #fafafa !important;\n  background: #fafafa !important; }\n\n.container {\n  max-width: 1024px;\n  margin: auto; }\n\n.text-primary {\n  color: #016fb9; }\n\n.text-default {\n  color: #353531; }\n\n.text-danger {\n  color: #ec4e20; }\n\n.text-warning {\n  color: #ff9505; }\n\n.text-dark {\n  color: black; }\n\n.text-info {\n  color: #470024; }\n\n.text-secondary {\n  color: #6e9075; }\n\n.text-white {\n  color: #fafafa; }\n\n.text-center {\n  text-align: center; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.btn {\n  appearance: none;\n  position: relative;\n  user-select: none;\n  display: inline;\n  border-style: solid;\n  border-color: #016fb9;\n  border-width: 2px;\n  padding: 18px 46px;\n  background: none;\n  margin: 4px;\n  z-index: 0;\n  font-family: \'Raleway\', sans-serif, Verdana, Geneva, Tahoma;\n  color: #016fb9;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0ms 30ms linear;\n  border-spacing: 1;\n  line-height: 1.42rem;\n  outline: none; }\n\n.btn::before {\n  z-index: -1;\n  content: " ";\n  top: 100%;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  position: absolute;\n  transition: top 100ms ease-out;\n  background: #016fb9; }\n\n.btn:active, .btn:hover, .btn.active {\n  color: #fafafa !important; }\n\n.btn:active::before, .btn:hover::before, .btn.active::before {\n  top: -1px; }\n\n.btn.white:active, .btn.white:hover, .btn.white.active {\n  color: #474c55 !important; }\n\n.btn:focus:hover:not(.active) {\n  color: #016fb9 !important; }\n\n.btn.secondary:hover:focus:not(.active) {\n  color: #6e9075 !important; }\n\n.btn.dark:focus:hover:not(.active) {\n  color: black !important; }\n\n.btn.danger:focus:hover:not(.active) {\n  color: #ec4e20 !important; }\n\n.btn.default:focus:hover:not(.active) {\n  color: #353531 !important; }\n\n.btn.info:focus:hover:not(.active) {\n  color: #470024 !important; }\n\n.btn.warning:focus:hover:not(.active) {\n  color: #ff9505 !important; }\n\n.btn.white:focus:hover:not(.active) {\n  color: #fafafa !important; }\n\n.btn:focus:hover:not(.active)::before {\n  top: 100%; }\n\n.btn-sm {\n  padding: 9px 23px;\n  margin: 2px; }\n\n.btn-xs {\n  padding: 2px 16px;\n  margin: 1px; }\n\n#nav {\n  position: fixed;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: -60px;\n  height: 60px;\n  z-index: 4000;\n  user-select: none;\n  font-weight: 200;\n  font-size: 30px;\n  transition: top 100ms ease-out, background-color 800ms ease-in-out;\n  background-color: rgba(255, 255, 255, 0); }\n  @media screen and (max-width: 600px) {\n    #nav {\n      height: 124px;\n      top: -124px; } }\n  #nav a:hover {\n    opacity: 0.8; }\n  #nav a:active {\n    opacity: 0.5; }\n\n#wrapper.shownav #nav {\n  top: 0px;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n#navbar {\n  display: block;\n  margin: 10px 20px; }\n\n#navbar #brand {\n  float: left;\n  width: 160px; }\n\n#navbar #brand img {\n  height: 40px; }\n\n#navbar ul#nav-items {\n  margin: 0;\n  padding: 0;\n  width: calc(100% - 161px);\n  float: right;\n  list-style: none;\n  text-align: right; }\n\n#navbar ul#nav-items li.nav-item {\n  float: right;\n  margin-left: 20px; }\n  @media screen and (max-width: 600px) {\n    #navbar ul#nav-items li.nav-item {\n      float: none; } }\n\ninput[type=text], input[type=email], textarea {\n  padding: 18px 26px;\n  margin: 8px 4px;\n  box-sizing: border-box;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  font-family: \'Raleway\';\n  width: 100%;\n  width: calc(100% - 4px);\n  resize: none; }\n\ninput[type=text].invalid, input[type=email].invalid, textarea.invalid {\n  border-color: #ec4e20; }\n\n.window * {\n  box-sizing: border-box; }\n\n.window {\n  box-shadow: 0 15px 40px 10px rgba(0, 0, 10, 0.2), 0 10px 10px -5px rgba(0, 0, 10, 0.5);\n  background-color: #28283c;\n  border-radius: 7px;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  width: 600px;\n  height: 280px;\n  position: absolute;\n  font-family: \'Roboto\', sans-serif;\n  font-weight: bold;\n  position: relative;\n  margin-top: 10px; }\n\n.window .bar {\n  background: #aaa;\n  height: 32px;\n  overflow: hidden;\n  padding: 8px;\n  user-select: none;\n  cursor: pointer; }\n\n.window .bar .icon-container {\n  position: absolute;\n  left: 8px; }\n\n.window .bar .icon-container .icon {\n  margin-right: 4px;\n  height: 16px;\n  width: 16px;\n  border-radius: 8px;\n  display: inline-block;\n  user-select: none;\n  cursor: not-allowed; }\n\n.window .bar .icon-container .icon-red {\n  background-color: red; }\n\n.window .bar .icon-container .icon-orange {\n  background-color: orangered; }\n\n.window .bar .icon-container .icon-green {\n  background-color: #50ff50; }\n\n.window .bar .title {\n  text-align: center;\n  float: unset;\n  user-select: none; }\n\n.window .bar .title .title-label {\n  cursor: text; }\n\n.window .bar .title:focus {\n  outline: none; }\n\n.window .content {\n  margin: 0;\n  width: 100%;\n  height: 248px;\n  user-select: none;\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  cursor: text; }\n\n.window .content .innerContent {\n  padding: 8px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%; }\n\n.window .content pre, .window .content .writable {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  color: white;\n  font-family: \'Roboto\', sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  overflow: hidden;\n  border: none;\n  outline: none;\n  background: transparent; }\n\n.window .content .writable:focus {\n  outline: none; }\n\n.alert {\n  background: rgba(53, 53, 49, 0.8);\n  color: #fafafa;\n  padding: 20px 30px;\n  border-radius: 3px; }\n\n.alert.alert-primary {\n  background: rgba(1, 111, 185, 0.8); }\n\n.alert.alert-warning {\n  background: rgba(255, 149, 5, 0.8); }\n\n.alert.alert-danger {\n  background: rgba(236, 78, 32, 0.8); }\n\n.alert.alert-dark {\n  background: rgba(0, 0, 0, 0.8); }\n\n.alert.alert-info {\n  background: rgba(71, 0, 36, 0.8); }\n\n.alert.alert-secondary {\n  background: rgba(110, 144, 117, 0.8); }\n\n/* Style the Image Used to Trigger the Modal */\n.modal-image {\n  cursor: pointer;\n  transition: 0.3s; }\n\n.modal-image:hover {\n  opacity: 0.7; }\n\n/* The Modal (background) */\n.modal {\n  position: fixed;\n  /* Stay in place */\n  z-index: 1000;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 102%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/ opacity */\n  transition: padding-top 100ms ease-out;\n  margin-bottom: 40px; }\n\n.modal#imgmodal {\n  display: none;\n  /* Hidden by default */\n  overflow: hidden;\n  padding-bottom: 70px;\n  padding-top: 30px; }\n\n#wrapper.shownav .modal {\n  padding-top: 90px; }\n\n.modal-content {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 1000px;\n  padding: 40px;\n  height: 100%;\n  background-color: #fff; }\n\n/* Modal Content (Image) */\nfigure.modal-content {\n  padding: 0;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain; }\n\n/* Caption of Modal Image (Image Text) - Same Width as the Image */\n#modal-caption {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0; }\n\n/* Add Animation - Zoom in the Modal */\n#imgmodal #modal-img, #modal-caption {\n  -webkit-animation-name: zoom;\n  -webkit-animation-duration: 0.6s;\n  animation-name: zoom;\n  animation-duration: 0.6s; }\n\n@-webkit-keyframes zoom {\n  from {\n    -webkit-transform: scale(0); }\n  to {\n    -webkit-transform: scale(1); } }\n\n@keyframes zoom {\n  from {\n    transform: scale(0); }\n  to {\n    transform: scale(1); } }\n\n/* The Close Button */\n#imgmodal .close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n  transition: top 100ms ease-out; }\n\n#wrapper.shownav #imgmodal .close {\n  top: 75px; }\n\n#imgmodal .close:hover,\n#imgmodal .close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer; }\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  #modal-img {\n    width: 100%; } }\n\n@media only screen and (max-width: 600px) {\n  #wrapper.shownav .modal {\n    padding-top: 224px; }\n  #wrapper.shownav #imgmodal .close {\n    top: 139px; } }\n\n.m-0 {\n  margin: 0; }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.ml-0 {\n  margin-left: 0; }\n\n.mr-0 {\n  margin-right: 0; }\n\n.mx-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.my-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.p-0 {\n  padding: 0; }\n\n.pt-0 {\n  padding-top: 0; }\n\n.pb-0 {\n  padding-bottom: 0; }\n\n.pl-0 {\n  padding-left: 0; }\n\n.pr-0 {\n  padding-right: 0; }\n\n.px-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.py-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.m-1 {\n  margin: 6; }\n\n.mt-1 {\n  margin-top: 6; }\n\n.mb-1 {\n  margin-bottom: 6; }\n\n.ml-1 {\n  margin-left: 6; }\n\n.mr-1 {\n  margin-right: 6; }\n\n.mx-1 {\n  margin-right: 6;\n  margin-left: 6; }\n\n.my-1 {\n  margin-top: 6;\n  margin-bottom: 6; }\n\n.p-1 {\n  padding: 6; }\n\n.pt-1 {\n  padding-top: 6; }\n\n.pb-1 {\n  padding-bottom: 6; }\n\n.pl-1 {\n  padding-left: 6; }\n\n.pr-1 {\n  padding-right: 6; }\n\n.px-1 {\n  padding-right: 6;\n  padding-left: 6; }\n\n.py-1 {\n  padding-top: 6;\n  padding-bottom: 6; }\n\n.m-2 {\n  margin: 12; }\n\n.mt-2 {\n  margin-top: 12; }\n\n.mb-2 {\n  margin-bottom: 12; }\n\n.ml-2 {\n  margin-left: 12; }\n\n.mr-2 {\n  margin-right: 12; }\n\n.mx-2 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.my-2 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.p-2 {\n  padding: 12; }\n\n.pt-2 {\n  padding-top: 12; }\n\n.pb-2 {\n  padding-bottom: 12; }\n\n.pl-2 {\n  padding-left: 12; }\n\n.pr-2 {\n  padding-right: 12; }\n\n.px-2 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.py-2 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.m-3 {\n  margin: 28; }\n\n.mt-3 {\n  margin-top: 28; }\n\n.mb-3 {\n  margin-bottom: 28; }\n\n.ml-3 {\n  margin-left: 28; }\n\n.mr-3 {\n  margin-right: 28; }\n\n.mx-3 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.my-3 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.p-3 {\n  padding: 28; }\n\n.pt-3 {\n  padding-top: 28; }\n\n.pb-3 {\n  padding-bottom: 28; }\n\n.pl-3 {\n  padding-left: 28; }\n\n.pr-3 {\n  padding-right: 28; }\n\n.px-3 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.py-3 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.m-4 {\n  margin: 36; }\n\n.mt-4 {\n  margin-top: 36; }\n\n.mb-4 {\n  margin-bottom: 36; }\n\n.ml-4 {\n  margin-left: 36; }\n\n.mr-4 {\n  margin-right: 36; }\n\n.mx-4 {\n  margin-right: 36;\n  margin-left: 36; }\n\n.my-4 {\n  margin-top: 36;\n  margin-bottom: 36; }\n\n.p-4 {\n  padding: 36; }\n\n.pt-4 {\n  padding-top: 36; }\n\n.pb-4 {\n  padding-bottom: 36; }\n\n.pl-4 {\n  padding-left: 36; }\n\n.pr-4 {\n  padding-right: 36; }\n\n.px-4 {\n  padding-right: 36;\n  padding-left: 36; }\n\n.py-4 {\n  padding-top: 36;\n  padding-bottom: 36; }\n\n.m-5 {\n  margin: 60; }\n\n.mt-5 {\n  margin-top: 60; }\n\n.mb-5 {\n  margin-bottom: 60; }\n\n.ml-5 {\n  margin-left: 60; }\n\n.mr-5 {\n  margin-right: 60; }\n\n.mx-5 {\n  margin-right: 60;\n  margin-left: 60; }\n\n.my-5 {\n  margin-top: 60;\n  margin-bottom: 60; }\n\n.p-5 {\n  padding: 60; }\n\n.pt-5 {\n  padding-top: 60; }\n\n.pb-5 {\n  padding-bottom: 60; }\n\n.pl-5 {\n  padding-left: 60; }\n\n.pr-5 {\n  padding-right: 60; }\n\n.px-5 {\n  padding-right: 60;\n  padding-left: 60; }\n\n.py-5 {\n  padding-top: 60;\n  padding-bottom: 60; }\n\nhtml {\n  background: white;\n  font-family: \'Raleway\', sans-serif, Verdana, Geneva, Tahoma; }\n\nbody {\n  color: #353531;\n  width: 100%;\n  margin: 0;\n  overflow-x: hidden; }\n\nfigure {\n  margin: 0; }\n\n* {\n  box-sizing: border-box; }\n\n.clearfix {\n  clear: both; }\n\niframe {\n  margin: 10px 0;\n  border: 0;\n  display: block; }\n\n.hidden {\n  display: none; }\n\nul {\n  text-align: left; }\n\n/*\r\n$col-default: rgba(53, 53, 49, 1);\r\n$col-danger: rgba(236, 78, 32, 1);\r\n$col-warning: rgba(255, 149, 5, 1);\r\n$col-primary: rgba(1, 111, 185, 1);\r\n$col-dark: rgba(0, 0, 0, 1);\r\n$col-info: rgba(71, 0, 36, 1);\r\n$col-secondary: rgba(110, 144, 117, 1);\r\n$col-background: rgba(250, 250, 250, 1);\r\n*/\n/* Page */\n#wrapper {\n  min-height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.lead {\n  font-size: 1.2em; }\n\n/* Banner */\n.contentwrapper {\n  user-select: contain;\n  margin: 10px;\n  transition: width 500ms ease;\n  min-height: 100vh;\n  min-height: calc(100vh - 232px);\n  margin-bottom: 200px;\n  position: relative; }\n\n#masthead {\n  text-align: center;\n  width: 100vw;\n  background-color: rgba(255, 10, 10, 0.2);\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 10, 10, 0.2)), to(rgba(10, 10, 255, 0.2)));\n  background-image: -webkit-linear-gradient(bottom, rgba(255, 10, 10, 0.2), rgba(10, 10, 255, 0.2));\n  background-image: -moz-linear-gradient(bottom, rgba(255, 10, 10, 0.2), rgba(10, 10, 255, 0.2));\n  background-image: linear-gradient(to top, rgba(255, 10, 10, 0.2), rgba(10, 10, 255, 0.2));\n  padding: 120px 0; }\n\n#masthead #profilepic {\n  display: block;\n  width: 180px;\n  max-width: 100%;\n  border-radius: 50%;\n  margin: auto; }\n\na {\n  color: #000; }\n\n#masthead #mastheadtitle {\n  margin-top: 0;\n  font-size: 80px;\n  font-weight: 200; }\n\na {\n  text-decoration: none;\n  color: #016fb9; }\n\n.mesection {\n  margin-top: 80px;\n  text-align: center; }\n\n.bubble {\n  background: rgba(53, 53, 49, 0.3);\n  border-radius: 50%; }\n\n#techstackbubble {\n  width: 200px;\n  height: 200px;\n  max-width: 200px;\n  max-height: 200px;\n  margin: auto;\n  overflow: hidden; }\n\n#screensizes {\n  max-width: 700px; }\n\n#techstackbubble-inner {\n  overflow: visible;\n  display: inline-block; }\n\n#techstackbubble-content {\n  margin: 40px 0;\n  height: 200px;\n  animation: cycletechnologies 40s 0s linear infinite;\n  white-space: nowrap;\n  overflow: visible;\n  display: block; }\n\n@keyframes cycletechnologies {\n  from {\n    transform: translateX(200px); }\n  to {\n    transform: translateX(calc(-1000px - 100%)); } }\n\n#techstackbubble-content img {\n  display: inline-block;\n  max-height: 120px;\n  max-width: 180px;\n  padding-left: 60px; }\n\n.mesection ul {\n  margin: 20px auto;\n  padding: 20px 40px;\n  width: 300px;\n  max-width: 100%;\n  overflow: visible;\n  background: #eeeeee;\n  border-radius: 20px; }\n\n.mesection .card {\n  margin: 20px auto;\n  padding: 20px;\n  width: 500px;\n  max-width: 100%;\n  overflow: visible;\n  background: #eeeeee;\n  border-radius: 20px; }\n\n#rocket-text {\n  font-size: 160px;\n  position: absolute;\n  top: 40%;\n  top: calc(50% - 160px);\n  left: 0;\n  right: 0;\n  z-index: 200;\n  text-shadow: 0 0 3px black;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.7); }\n\n.console {\n  margin-top: 10px; }\n\n@media screen and (max-width: 700px) {\n  #rocket-text {\n    font-size: 100px; } }\n\n@media screen and (max-width: 600px) {\n  #rocket-text {\n    font-size: 60px; } }\n\n#rocket-masthead {\n  width: 100vw;\n  position: relative; }\n  #rocket-masthead img {\n    width: 100vw; }\n\n.project-article {\n  margin-top: 60px;\n  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.14), 0 0 40px 20px rgba(0, 0, 0, 0.05);\n  padding: 20px; }\n  .project-article h1.title {\n    margin-top: 7px; }\n  .project-article .proj-type-colors, .project-article .proj-techs {\n    display: block;\n    float: left; }\n  .project-article .proj-techs {\n    margin-left: 20px; }\n  .project-article .proj-type-colors .proj-type-color, .project-article .proj-techs .proj-tech {\n    margin-left: 5px;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    float: left; }\n  .project-article .proj-techs .proj-tech {\n    background: rgba(110, 144, 117, 0.5);\n    text-align: center;\n    overflow: hidden;\n    background-position: center center;\n    background-size: 70%;\n    background-repeat: no-repeat; }\n  .project-article .proj-type-colors .proj-type-color.webapp {\n    background-color: #ff9505; }\n  .project-article .proj-type-colors .proj-type-color.desktopapp {\n    background-color: #6e9075; }\n  .project-article .proj-type-colors .proj-type-color.mobileapp {\n    background-color: #ec4e20; }\n  .project-article .proj-type-colors .proj-type-color.util {\n    background-color: #470024; }\n  .project-article .images {\n    float: left;\n    width: 90vw;\n    max-width: 1000px; }\n  .project-article .images img {\n    height: 160px;\n    display: block;\n    float: left;\n    margin: 10px; }\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  user-select: contain; }\n\nul#footer-links {\n  list-style: none;\n  margin: 3px;\n  text-align: right; }\n\nul#footer-links li {\n  display: inline-block;\n  margin-right: 10px; }\n\nul#footer-links li::before {\n  font-family: Arial, Helvetica, sans-serif;\n  content: " \\2022   "; }\n\n.project-article iframe {\n  width: 100%;\n  height: 600px;\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3); }\n\n#particles-js {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute; }\n\n#masthead-header {\n  position: relative; }\n\nsvg#teck-stack-svg {\n  display: block;\n  margin: auto;\n  background: rgba(53, 53, 49, 0.3);\n  border-radius: 20px; }\n\n.circle-overlay {\n  font-size: 16px;\n  border-radius: 50%;\n  position: absolute;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.circle-overlay__inner {\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n',''])},338:function(){'use strict';window.addEventListener('load',function(){(function(){var a=document.getElementById('wrapper'),b=document.getElementById('nav'),c=b&&a.classList.contains('navshow')||!1,d=0,e=0;window.addEventListener('scroll',function(){return setTimeout(function(){!c&&(600>window.scrollY||window.scrollY<e)&&null!==b?(a.classList.add('shownav'),c=!0,d=window.scrollY+5):c&&600<window.scrollY&&window.scrollY>e&&null!==b&&(a.classList.remove('shownav'),c=!1),e=window.scrollY},0)})})(),function(){var a=document.getElementById('imgmodal');if(null!==a){var b=a.querySelector('#modal-img'),c=a.querySelector('#modal-caption');document.addEventListener('click',function(d){d.target.classList.contains('modal-image')&&(a.style.display='block',a.setAttribute('aria-expanded','true'),b.setAttribute('style','background-image: url('+d.target.src+')'),c.innerHTML=d.target.alt)});var d=a.querySelector('.close');d.onclick=function(){a.style.display='none',a.setAttribute('aria-expanded','false')}}}(),function(){var a=document.getElementsByClassName('contentwrapper');return 1>a.length?void console.log('cannot find contentwrapper'):void window.addEventListener('resize',function(){return setTimeout(function(){for(var b=0;b<a.length;b++)a[b].style.width=window.innerWidth-35+'px'},0)})}()},!1)},339:function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}var e=c(340),f=d(e),g=c(341),h=d(g),i=c(342),j=d(i),k=c(343),l=d(k),m=c(344),n=d(m),o=c(345),p=d(o),q=window.angular;console.log('once'),q.module('portfolio',['ngSanitize']).config(['$compileProvider',function(a){a.debugInfoEnabled(!1),a.commentDirectivesEnabled(!1),a.cssClassDirectivesEnabled(!1)}]),(0,n.default)(q),(0,p.default)(q),(0,h.default)(q),(0,f.default)(q),(0,j.default)(q),(0,l.default)(q)},340:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default=function(a){a.module('portfolio').component('project',{templateUrl:'./scripts/components/project-component/project.component.html',bindings:{project:'<'},controller:['technologiesService','$sce',function(a,b){var c=this;a.getTechnologies().then(function(a){var b=a.data,d=b.map(function(a){return a.name});c.technologies=c.project.technologies.map(function(a){return b.find(function(b){return b.name.toLowerCase()===a.toLowerCase()})})}),c.$onInit=function(){c.project=c.project,c.projContentText=b.trustAsHtml(c.project.content.text)}}]})}},341:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default=function(a){a.module('portfolio').component('projectsList',{templateUrl:'./scripts/components/projects-list-component/projects.list.component.html',controller:['projectsService',function(a){function b(a){return(a||'').replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,'\\$&')}function c(){console.log('herer');var a=new RegExp(b(d.searchStr),'i');d.filteredProjects=d.projects.filter(function(b){return b.webApp===(d.filters.webApp||b.webApp)&&b.mobileApp===(d.filters.mobileApp||b.mobileApp)&&b.desktopApp===(d.filters.desktopApp||b.desktopApp)&&b.util===(d.filters.util||b.util)&&a.test(b.title)})}var d=this;d.filters={},a.getProjects().then(function(a){d.projects=a.data,d.filteredProjects=d.projects}),d.isFiltersEmpty=function(){return 1>Object.keys(d.filters).length},d.filter=function(a){d.filters[a]=!d.filters[a],c()},d.search=function(){c()},d.removeFilter=function(){d.filters={},c()}}]})}},342:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default=function(a){a.module('portfolio').component('console',{templateUrl:'./scripts/components/console-component/console.component.html',bindings:{name:'@',console:'<'},controller:['$scope','$http',function(a,b){var c=this;c.oldContent='Connecting to Server...',c.content='',a.init=function(){b({method:c.console.testConnection.method,url:c.console.testConnection.url}).then(function(){c.oldContent='',c.content=c.content||c.console.hint||''},function(){c.oldContent=(c.oldContent+'\nfailed to connect to server').trim()})},c.keyPressHandler=function(a){13===a.keyCode&&(c.EnterKeyPressHandler(a),a.preventDefault())},c.consoleClickHandler=function(a){var b=a.target;if(null!==b.parentElement){var c=b.parentElement.querySelector('.writable');c.focus()}},c.EnterKeyPressHandler=function(){c.oldContent=(c.oldContent+'\n'+c.content).trim();var a=c.content||'';c.content='',b({method:c.console.connection.method,data:{Debug:!1,Code:a},headers:{"Content-Type":'application/json'},url:c.console.connection.url}).then(function(a){console.log(a),c.oldContent=(c.oldContent+'\n'+(a.data||'Script was succesfull')).trim()},function(){c.oldContent=(c.oldContent+'\nfailed to connect to server').trim()})}}]})}},343:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default=function(a){a.module('portfolio').component('techstackList',{templateUrl:'./scripts/components/techstack-list-component/techstack.list.component.html',controller:['technologiesService',function(a){var b=this;a.getTechnologies().then(function(a){console.log('response',a);var c=a.data;b.technologies=c.filter(function(a){return 0<a.value&&a.icon}).sort(function(c,a){return a.value-c.value})})}]})}},344:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default=function(a){a.module('portfolio').service('projectsService',['$http',function(a){this.getProjects=function(){return a.get('./projects.json')}}])}},345:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default=function(a){a.module('portfolio').service('technologiesService',['$http',function(a){var b=a.get('./technologies.json');this.getTechnologies=function(){return b}}])}},346:function(){'use strict';console.log(window.particlesJS);var a=window.particlesJS;window.addEventListener('load',function(){null!==document.getElementById('particles-js')&&a.load('particles-js','./particlesjs-config.json',function(){console.log('particles loaded')})})},347:function(){'use strict';window.initD3TechStackBubble=function(){d3.json('./technologies.json',initD3TechStackBubbleWithData)},window.initD3TechStackBubbleWithData=function(a){function b(){q.attr('transform',function(a){return'translate('+a.x+','+a.y+')'}).select('circle').attr('r',function(a){return a.r})}if(null!==document.getElementById('teck-stack-svg')){var c,d=d3.select('#teck-stack-svg'),e=d.property('clientWidth'),f=+d.attr('height'),g=.5*e,h=.5*f,i=.05;console.log('width',e);var j=d3.format(',d'),k=d3.scaleOrdinal(d3.schemeCategory20),l=d3.pack().size([e,f]).padding(1.5),m=d3.forceCollide(function(a){return a.r+1}),n=d3.forceSimulation().force('charge',d3.forceManyBody()).force('collide',m).force('x',d3.forceX(g).strength(i)).force('y',d3.forceY(h).strength(i));'matchMedia'in window&&window.matchMedia('(max-device-width: 767px)').matches&&(a=a.filter(function(a){return 50<=a.value})),a.forEach(function(a){a.icon='./images/techs/'+a.icon});var o=d3.hierarchy({children:a}).sum(function(a){return a.value}),p=l(o).leaves().map(function(a){var b=a.data;return{x:g+3*(a.x-g),y:h+3*(a.y-h),r:0,radius:a.r,id:b.cat+'.'+b.name.replace(/\s/g,'-'),cat:b.cat,name:b.name,value:b.value,icon:b.icon,desc:b.desc}});n.nodes(p).on('tick',b),d.style('background-color','#eee');var q=d.selectAll('.node').data(p).enter().append('g').attr('class','node').call(d3.drag().on('start',function(a){d3.event.active||n.alphaTarget(.2).restart(),a.fx=a.x,a.fy=a.y}).on('drag',function(a){a.fx=d3.event.x,a.fy=d3.event.y}).on('end',function(a){d3.event.active||n.alphaTarget(0),a.fx=null,a.fy=null}));q.append('circle').attr('id',function(a){return a.id}).attr('r',0).style('fill',function(a){return k(a.cat)}).transition().duration(2e3).ease(d3.easeElasticOut).tween('circleIn',function(a){var b=d3.interpolateNumber(0,a.radius);return function(c){a.r=b(c),n.force('collide',m)}}),q.append('clipPath').attr('id',function(a){return'clip-'+a.id}).append('use').attr('xlink:href',function(a){return'#'+a.id}),q.filter(function(a){return!a.icon}).append('text').classed('node-icon',!0).attr('clip-path',function(a){return'url(#clip-'+a.id+')'}).selectAll('tspan').data(function(a){return a.icon.split(';')}).enter().append('tspan').attr('x',0).attr('y',function(a,b,c){return 13+10*(b-c.length/2-.5)}).text(function(a){return a}),q.filter(function(a){return a.icon}).append('image').classed('node-icon',!0).attr('clip-path',function(a){return'url(#clip-'+a.id+')'}).attr('xlink:href',function(a){return a.icon}).attr('x',function(a){return .7*-a.radius}).attr('y',function(a){return .7*-a.radius}).attr('height',function(a){return .7*(2*a.radius)}).attr('width',function(a){return .7*(2*a.radius)}),q.append('title').text(function(a){return a.desc});var r=d3.legendColor().scale(k).shape('circle');d.append('g').classed('legend-color',!0).attr('text-anchor','start').attr('transform','translate(20,30)').style('font-size','12px').call(r);var s=d3.scaleOrdinal().domain(['less skilled','more skilled']).range([5,10]),t=d3.legendSize().scale(s).shape('circle').shapePadding(10).labelAlign('end');d.append('g').classed('legend-size',!0).attr('text-anchor','start').attr('transform','translate(150, 25)').style('font-size','12px').call(t);var u=q.append('foreignObject').classed('circle-overlay hidden',!0).attr('x',-140).attr('y',-140).attr('height',280).attr('width',280).append('xhtml:div').classed('circle-overlay__inner',!0);u.append('h2').classed('circle-overlay__title',!0).text(function(a){return a.name}),u.append('p').classed('circle-overlay__body',!0).html(function(a){return a.desc}),q.on('click',function(a){d3.event.stopPropagation(),console.log('currentNode',a);var b=d3.event.currentTarget;if(a!==c){var e=c;c=a,n.alphaTarget(.2).restart(),d3.selectAll('.circle-overlay').classed('hidden',!0),d3.selectAll('.node-icon').classed('node-icon--faded',!1),e&&(e.fx=null,e.fy=null,q.filter(function(a,b){return b===e.index}).transition().duration(2e3).ease(d3.easePolyOut).tween('circleOut',function(){var a=d3.interpolateNumber(e.r,e.radius);return function(b){e.r=a(b)}}).on('interrupt',function(){e.r=e.radius})),d3.transition().duration(2e3).ease(d3.easePolyOut).tween('moveIn',function(){console.log('tweenMoveIn',a);var b=d3.interpolateNumber(a.x,g),c=d3.interpolateNumber(a.y,h),d=d3.interpolateNumber(a.r,.5*h);return function(e){a.fx=b(e),a.fy=c(e),a.r=d(e),n.force('collide',m)}}).on('end',function(){n.alphaTarget(0);var a=d3.select(b);a.select('.circle-overlay').classed('hidden',!1),a.select('.node-icon').classed('node-icon--faded',!0)}).on('interrupt',function(){console.log('move interrupt',a),a.fx=null,a.fy=null,n.alphaTarget(0)})}}),d3.select(document).on('click',function(){var a=d3.event.target;!a.closest('#circle-overlay')&&c&&(c.fx=null,c.fy=null,n.alphaTarget(.2).restart(),d3.transition().duration(2e3).ease(d3.easePolyOut).tween('moveOut',function(){console.log('tweenMoveOut',c);var a=d3.interpolateNumber(c.r,c.radius);return function(b){c.r=a(b),n.force('collide',m)}}).on('end',function(){c=null,n.alphaTarget(0)}).on('interrupt',function(){n.alphaTarget(0)}),d3.selectAll('.circle-overlay').classed('hidden',!0),d3.selectAll('.node-icon').classed('node-icon--faded',!1))})}}},89:function(a){'use strict';function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='+e.sourceRoot+a+' */'});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+b)+' */'}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '+c[2]+'{'+d+'}':d}).join('')},c.i=function(a,b){'string'==typeof a&&(a=[[null,a,'']]);for(var d,e={},f=0;f<this.length;f++)d=this[f][0],'number'==typeof d&&(e[d]=!0);for(f=0;f<a.length;f++){var g=a[f];'number'==typeof g[0]&&e[g[0]]||(b&&!g[2]?g[2]=b:b&&(g[2]='('+g[2]+') and ('+b+')'),c.push(g))}},c}},90:function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=o[d.id];if(e){e.refs++;for(var f=0;f<e.parts.length;f++)e.parts[f](d.parts[f]);for(;f<d.parts.length;f++)e.parts.push(k(d.parts[f],b))}else{for(var g=[],f=0;f<d.parts.length;f++)g.push(k(d.parts[f],b));o[d.id]={id:d.id,refs:1,parts:g}}}}function e(a,b){for(var c=[],d={},e=0;e<a.length;e++){var f=a[e],g=b.base?f[0]+b.base:f[0],h=f[1],i=f[2],j=f[3],k={css:h,media:i,sourceMap:j};d[g]?d[g].parts.push(k):c.push(d[g]={id:g,parts:[k]})}return c}function f(a,b){var c=q(a.insertInto);if(!c)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');var d=t[t.length-1];if('top'===a.insertAt)d?d.nextSibling?c.insertBefore(b,d.nextSibling):c.appendChild(b):c.insertBefore(b,c.firstChild),t.push(b);else if('bottom'===a.insertAt)c.appendChild(b);else if('object'==typeof a.insertAt&&a.insertAt.before){var e=q(a.insertInto+' '+a.insertAt.before);c.insertBefore(b,e)}else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')}function g(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a);var b=t.indexOf(a);0<=b&&t.splice(b,1)}function h(a){var b=document.createElement('style');return a.attrs.type='text/css',j(b,a.attrs),f(a,b),b}function i(a){var b=document.createElement('link');return a.attrs.type='text/css',a.attrs.rel='stylesheet',j(b,a.attrs),f(a,b),b}function j(a,b){Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])})}function k(a,b){var c,d,e,f;if(b.transform&&a.css)if(f=b.transform(a.css),f)a.css=f;else return function(){};if(b.singleton){var j=s++;c=r||(r=h(b)),d=l.bind(null,c,j,!1),e=l.bind(null,c,j,!0)}else a.sourceMap&&'function'==typeof URL&&'function'==typeof URL.createObjectURL&&'function'==typeof URL.revokeObjectURL&&'function'==typeof Blob&&'function'==typeof btoa?(c=i(b),d=n.bind(null,c,b),e=function(){g(c),c.href&&URL.revokeObjectURL(c.href)}):(c=h(b),d=m.bind(null,c),e=function(){g(c)});return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}function l(a,b,c,d){var e=c?'':d.css;if(a.styleSheet)a.styleSheet.cssText=v(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function m(a,b){var c=b.css,d=b.media;if(d&&a.setAttribute('media',d),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function n(a,b,c){var d=c.css,e=c.sourceMap,f=b.convertToAbsoluteUrls===void 0&&e;(b.convertToAbsoluteUrls||f)&&(d=u(d)),e&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+' */');var g=new Blob([d],{type:'text/css'}),h=a.href;a.href=URL.createObjectURL(g),h&&URL.revokeObjectURL(h)}var o={},p=function(a){var b;return function(){return'undefined'==typeof b&&(b=a.apply(this,arguments)),b}}(function(){return window&&document&&document.all&&!window.atob}),q=function(a){var b={};return function(c){if('undefined'==typeof b[c]){var d=a.call(this,c);if(d instanceof window.HTMLIFrameElement)try{d=d.contentDocument.head}catch(a){d=null}b[c]=d}return b[c]}}(function(a){return document.querySelector(a)}),r=null,s=0,t=[],u=c(91);a.exports=function(a,b){if('undefined'!=typeof DEBUG&&DEBUG&&'object'!=typeof document)throw new Error('The style-loader cannot be used in a non-browser environment');b=b||{},b.attrs='object'==typeof b.attrs?b.attrs:{},b.singleton||(b.singleton=p()),b.insertInto||(b.insertInto='head'),b.insertAt||(b.insertAt='bottom');var c=e(a,b);return d(c,b),function(a){for(var f=[],g=0;g<c.length;g++){var h=c[g],i=o[h.id];i.refs--,f.push(i)}if(a){var k=e(a,b);d(k,b)}for(var i,g=0;g<f.length;g++)if(i=f[g],0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete o[i.id]}}};var v=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}()},91:function(a){'use strict';a.exports=function(a){var b='undefined'!=typeof window&&window.location;if(!b)throw new Error('fixUrls requires window.location');if(!a||'string'!=typeof a)return a;var c=b.protocol+'//'+b.host,d=c+b.pathname.replace(/\/[^\/]*$/,'/'),e=a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(a,b){var e=b.trim().replace(/^"(.*)"$/,function(a,b){return b}).replace(/^'(.*)'$/,function(a,b){return b});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(e))return a;var f;return f=0===e.indexOf('//')?e:0===e.indexOf('/')?c+e:d+e.replace(/^\.\//,''),'url('+JSON.stringify(f)+')'});return e}}});