// function findAncestor (el, cls) {
// 	while ((el = el.parentel) && !el.clsList.contains(cls));
// 	return el
// }
//
// function isElementInViewport (el) {
// 	let rect = el.getBoundingClientRect()
// 	return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight)
// }

document.addEventListener('DOMContentLoaded', (e)=> {
	
	// if (document.querySelectorAll('.slider')) {
	// 	let sliders = document.querySelectorAll('.slider')
	// 	for (let i = 0; i < sliders.length; i++) {
	// 		let
	// 			slides = sliders[i].querySelector('.slides'),
	// 			next = sliders[i].querySelector('.controls .next'),
	// 			prev = sliders[i].querySelector('.controls .prev'),
	// 			width = slides.querySelector('.slide').clientWidth,
	// 			total = slides.children.length,
	// 			showcase = Math.round(slides.clientWidth / width),
	// 			current = 1
	// 		// slides.dataset.active = current
	//
	// 		//activate buttons
	// 		if (showcase <= total - current) {
	// 			next.classList.add('active')
	// 		}
	//
	// 		addEventListener('resize', (e)=> {
	// 			width = slides.querySelector('.slide').clientWidth
	// 			showcase = Math.round(slides.clientWidth / width)
	//
	// 			if (showcase > total - current) {
	// 				current = total - showcase + 1
	// 			}
	//
	// 			slides.style.transform = 'translateX(-' + ((current - 1) * width).toString()  + 'px)'
	//
	// 			if (showcase <= total - current) {
	// 				next.classList.add('active')
	// 			} else {
	// 				next.classList.remove('active')
	// 			}
	//
	// 			if (current < 2) {
	// 				prev.classList.remove('active')
	// 			}
	// 		})
	//
	// 		next.addEventListener('click', (e)=> {
	// 			if (next.classList.contains('active')) {
	// 				current++
	// 				slides.style.transform = 'translateX(-' + ((current - 1) * width).toString()  + 'px)'
	//
	// 				prev.classList.add('active')
	// 				if (showcase > total - current) {
	// 					next.classList.remove('active')
	// 				}
	// 			}
	// 		})
	//
	// 		prev.addEventListener('click', function(e) {
	// 			if (prev.classList.contains('active')) {
	// 				current--
	// 				slides.style.transform = 'translateX(-' + ((current - 1) * width).toString()  + 'px)'
	//
	// 				next.classList.add('active')
	// 				if (current < 2) {
	// 					prev.classList.remove('active')
	// 				}
	// 			}
	// 		})
	//
	// 		//slider swipe
	// 		function handleGalleryMTouchStart(e) {
	// 			xDown = e.changedTouches[0].clientX
	// 		}
	// 		function handleGalleryMTouchMove(e) {
	// 			if (!xDown) {
	// 				return
	// 			}
	// 			let xUp = e.changedTouches[0].clientX
	// 			let xDiff = xDown - xUp
	// 			if (xDiff > 0)
	// 			next.dispatchEvent(new Event('click'))
	// 			else
	// 			prev.dispatchEvent(new Event('click'))
	// 			xDown = null
	// 		}
	//
	// 		let xDown = null
	//
	// 		let handleGalleryTouchStart = function(e) {
	// 			xDown = e.changedTouches[0].clientX
	// 		}
	//
	// 		let handleGalleryTouchMove = function(e) {
	// 			if (!xDown) {
	// 				return
	// 			}
	//
	// 			let xUp = e.changedTouches[0].clientX
	// 			let xDiff = xDown - xUp
	// 			if (xDiff > 0)
	// 			next.dispatchEvent(new Event('click'))
	// 			else
	// 			prev.dispatchEvent(new Event('click'))
	// 			xDown = null
	// 		}
	//
	// 		slides.addEventListener('touchstart', handleGalleryMTouchStart)
	// 		slides.addEventListener('touchmove', handleGalleryMTouchMove)
	// 	}
	// }
	//
	
	if (document.querySelector('#last_user_reviews-slider')) {
		let last_user_reviews__slider = new Swiper('#last_user_reviews-slider', {
			slidesPerView: 3,
			spaceBetween: 30,
			// autoHeight: true,
			navigation: {
	        nextEl: '#last_user_reviews-slider > .controls .next',
	        prevEl: '#last_user_reviews-slider > .controls .prev',
	      },
			breakpoints: {
				1199: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				},
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		})
	}
	
	if (document.querySelector('#underrated_stocks-slider')) {
		let underrated_stocks__slider = new Swiper('#underrated_stocks-slider', {
			slidesPerView: 4,
			spaceBetween: 30,
			// autoHeight: true,
			navigation: {
	        nextEl: '#underrated_stocks-slider > .controls .next',
	        prevEl: '#underrated_stocks-slider > .controls .prev',
	      },
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				},
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		})
	}
	
})
