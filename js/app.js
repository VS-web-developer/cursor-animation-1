let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-ul li');
let title = document.querySelector('.nav__title h1');

window.addEventListener('mousemove', cursor);

function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(function (link) { mousemove(link) });
mousemove(title);

function mousemove(obj) {
	obj.addEventListener('mouseover', function () {
		mouseCursor.classList.add('link-grow');
		obj.classList.add('link--hover');
	});
	obj.addEventListener('mouseleave', function () {
		mouseCursor.classList.remove('link-grow');
		obj.classList.remove('link--hover');
	});
}


