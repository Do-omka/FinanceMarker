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
	if (document.querySelector('.slider')) {
		let slider = document.querySelector('.slider'),
			slides = slider.querySelector('.slides'),
			next = slider.querySelector('.controls .next'),
			prev = slider.querySelector('.controls .prev'),
			width = slides.querySelector('.slide').clientWidth,
			total = slides.children.length,
			showcase = slides.clientWidth / width,
			current = 1
			
		// slides.dataset.active = current
		
		if (total > showcase) {
			next.classList.add('active')
		}
		
		addEventListener('resize', (e)=> {
			width = slides.querySelector('.slide').clientWidth
			showcase = slides.clientWidth / width
			
			if (showcase > total - current) {
				current = total - showcase + 1
			}
			
			slides.style.transform = 'translateX(-' + ((current - 1) * width).toString()  + 'px)'
			
			if (showcase <= total - current) {
				next.classList.add('active')
			} else {
				next.classList.remove('active')
			}
		})
		
		next.addEventListener('click', (e)=> {
			if (next.classList.contains('active')) {
				current++
				slides.style.transform = 'translateX(-' + ((current - 1) * width).toString()  + 'px)'
				
				prev.classList.add('active')
				if (showcase > total - current) {
					next.classList.remove('active')
				}
			}
		})
		
		prev.addEventListener('click', function(e) {
			if (prev.classList.contains('active')) {
				current--
				slides.style.transform = 'translateX(-' + ((current - 1) * width).toString()  + 'px)'
				
				next.classList.add('active')
				if (current < 2) {
					prev.classList.remove('active')
				}
			}
		})
	}
})
