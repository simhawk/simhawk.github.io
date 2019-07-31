/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		navFixedTop = document.querySelector( '.navbar-fixed-top' ),
		navbar = document.querySelector('.navbar'),
		projectsTitle = document.querySelector('.projects-title'),
		links = navbar.getElementsByTagName("a"),
		didScroll = false,
		lastScroll = 0,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 100 );
			}
		}, false );
	}

	function scrollPage() {
		if (document.documentElement.scrollTop === 0) {
			for(var i = 0; i < links.length; i++){
				classie.remove(links[i],"thing")	
			}
		} else {
			for(var i = 0; i < links.length; i++){
				classie.add(links[i],"thing")	
			}
		}
		/*
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( navFixedTop, 'navbar-shrink' );
		}
		else {
			classie.remove( navFixedTop, 'navbar-shrink' );
		}

		// scrolling down
		if(sy - lastScroll < 0) {
			classie.add(navbar, '.navbar-transparent');
		} else {
			classie.remove(navbar, '.navbar-transparent');
		}
		lastScroll = sy;
		*/
		didScroll = false;

	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();