"use strict";

//Name Component
var nameComponent = /*#__PURE__*/React.createElement("div", {
  id: "name"
}, /*#__PURE__*/React.createElement("h1", {
  id: "name_comp"
}, "PRITESH MANOJ CHOKSI")); //Picture Component

var pictureComponent = /*#__PURE__*/React.createElement("div", {
  id: "image"
}, /*#__PURE__*/React.createElement("img", {
  id: "picture_comp",
  src: "./self.jpg"
})); //Intro Component

var introComponent = /*#__PURE__*/React.createElement("div", {
  id: "intro"
}, /*#__PURE__*/React.createElement("p", {
  id: "intro_comp"
}, "I am currently Pursuing Master's in Computer Science at San Diego State University")); //Button Component

var buttonComponent = /*#__PURE__*/React.createElement("div", {
  id: "button"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/pritesh11-10"
}, /*#__PURE__*/React.createElement("button", {
  id: "button_comp"
}, "Link to my Github")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('image'));
ReactDOM.render(introComponent, document.getElementById('intro'));
ReactDOM.render(buttonComponent, document.getElementById('gitBtn'));