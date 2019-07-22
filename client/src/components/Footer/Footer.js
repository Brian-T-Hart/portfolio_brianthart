import React from 'react';
import FooterIcon from '../Icons/FooterIcons';
import BackToTop from '../BackToTop/BackToTop';

const Footer = () => (
	<div className="d-flex justify-content-center bg-darkgray" id="footer">
		<FooterIcon href="https://www.linkedin.com/in/hartbriant/" className="fab fa-linkedin-in" />
		<FooterIcon href="https://github.com/Brian-T-Hart" className="fab fa-github" />
		<FooterIcon href="https://stackoverflow.com/users/10062801/brian-hart?tab=profile" className="fab fa-stack-overflow" />
		<BackToTop />
	</div>
)

export default Footer;