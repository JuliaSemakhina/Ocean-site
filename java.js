const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelector('nav')
const navLinks = document.querySelectorAll('.nav__link');
const containerAll = document.querySelector('.nav__list')
const contAllStyle = containerAll.style
const bodyClassList = document.body.classList

navToggle.addEventListener('click', () => {
	contAllStyle.transition = 'transform 250ms ease-in-out'
	bodyClassList.toggle('nav-is-open');
});


navLinks.forEach(link => {
	link.addEventListener('click', () => {
		contAllStyle.transition = '0ms'
		bodyClassList.remove('nav-is-open');
	})
})