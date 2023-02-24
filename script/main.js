/**
* Author: Ken, Ben
 * Group: 01
 * Assignment: EA2
 * Module: ITE3006
 * Course: IT114105
 * 
 * File: main.js
 * Description: The script file of the main architecture of the website
 * Create Date: 02-MAR-2022
 */




/**
 * set button bar style
 * @param {} obj 
 */
function changeIcon(obj) {
	obj.classList.toggle("change");
}

/**
 * show or hide navigation menu
 */
function toggleNav() {
	var isVisible = document.getElementById("sideNav").style.visibility = document.getElementById("sideNav").style.visibility === "visible" ? 'hidden' : 'visible';
	document.getElementById("sideNav").style.height = document.getElementById("sideNav").style.height === "100%" ? '0' : '100%';
	if (isVisible == "visible") {
		disableScrolling();
	} else {
		enableScrolling();
	}
}

/**
 * set the screen position to current position until the menu closed
 */
function disableScrolling() {
	var x = window.scrollX;
	var y = window.scrollY;
	window.onscroll = function () {
		window.scrollTo(x, y);
	};
}

/**
 * clear the on scroll event
 */
function enableScrolling() {
	window.onscroll = "";
}