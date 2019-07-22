import React from 'react';

function handleClick(event) {
	let elementId = event.target.dataset.id;
	let element = document.getElementById(elementId);
	element.scrollIntoView({
		behavior: 'smooth'
	});
}

const NavIcon = (props) => (
	<div className="icon-container d-flex flex-column align-items-center">
		<i className={props.className} data-id={props.dataId} onClick={handleClick}></i>
		<h6 className="mb-0 pointer" data-id={props.dataId} onClick={handleClick}>{props.iText}</h6>
	</div>
)

export default NavIcon;