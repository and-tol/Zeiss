// Initialize Tabbis == tabs toggle
var tabs = tabbis.init();

// Initialize fullpage.js
new fullpage('#fullpage', {
	//Навигация Navigation
	// anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7'],
	anchors: ['slideFirst', 'slideSecond', 'slideThird', 'slideFour', 'slideFive', 'slideSix', 'slideSeven'],
	navigation: true,
	navigationPosition: 'right',

	//Навигация Scrolling
	css3: true,
	scrollingSpeed: 400,
	scrollOverflow: true,
	scrollBar:true,
	// autoScrolling: true,
	fitToSection: true,
	keyboardScrolling: true,
	fitToSection: true,
	controlArrows: false,
	responsiveHeight: 600,
	verticalCentered: false,
	// continuousVertical: true,
	// fullpage_api.setAllowScrolling(true);
});




/* Initialize Swiper
4. History */
var swiper41 = new Swiper('.slider-history-img', {
	slidesPerView: 1,
	spaceBetween: 30,
	// nested: true,
	pagination: {
		el: '.pagination-history',
		clickable: true,
	},
});

// 4. History - History texts
var swiper42 = new Swiper('.slider-history-texts', {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: '.pagination-history',
		clickable: true,
	},
	navigation: {
		nextEl: '.history-texts-button-next',
		prevEl: '.history-texts-button-prev'
	},
});

/* Initialize Swiper Custom Pagination + Navigation
6. Building plan */
var swiper6 = new Swiper('.plan-slider', {
	navigation: {
		nextEl: '.plan-slider-button-next',
		prevEl: '.plan-slider-button-prev',
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: '.plan-slider-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + ' plan-pag-active ">' + (index + 1) + '</span>';
		},
	},
});