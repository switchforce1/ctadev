/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
//require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require('jquery');
global.$ = global.jQuery = $;
const WOW = require('wow.js');
global.WOW = WOW;

// require("bootstrap");
// require("animate");
// require("owl.carousel");
// require("magnific-popup");


import "../plugins/martxa/css/bootstrap.min.css";
import "../plugins/martxa/css/animate.css";
import "../plugins/martxa/css/owl.carousel.css";
import "../plugins/martxa/css/font-awesome.min.css";
import "../plugins/martxa/css/magnific-popup.css";
import "../plugins/martxa/css/slicknav.min.css";
import "../plugins/martxa/css/styles.css";
import "../plugins/martxa/css/responsive.css";
import "../plugins/martxa/css/responsive.css";

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
