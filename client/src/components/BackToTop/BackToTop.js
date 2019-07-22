import React from 'react';

function handleClick() {
	let element = document.getElementById('section-home');
	element.scrollIntoView({
		behavior: 'smooth'
	});
}

const BackToTop = () => (
	<p className="pointer text-center" id="back-to-top" onClick={handleClick}>Back to top</p>
)

export default BackToTop;