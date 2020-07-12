import React from 'react';
import Bar from '../BarGraph/Bar';

const About = () => (
	<div className="section" id="section-about">
		<h1 className="section-title">About</h1>

		<div className="row d-flex justify-content-center align-items-center">
			<div className="col-md-6 col-xs-12 p-4">
				<img alt="Brian Hart" className="about-image" src="https://res.cloudinary.com/dfonttj4w/image/upload/c_scale,h_400,q_100/v1555738247/b7u4tntezpsyvk8rke3w.png" />
				<h4 className="pt-3 text-center">Freelance Web Developer</h4>
				<p className="text-justify">I am a freelance web developer who loves to solve challenges and create great user experiences. HTML, CSS, JavaScript, React, Node, PHP, Laravel, and Wordpress are a few of my favorite tools to work with. When I am not coding, I am spending time with my family, playing roller hockey, or learning new skills.</p>
			</div>

			<div className="col-md-6 col-xs-12 p-4" id="about-bar-container">
				<Bar title="HTML" width="90%" />
				<Bar title="CSS" width="85%" />
				<Bar title="JavaScript" width="85%" />
				<Bar title="React" width="80%" />
				<Bar title="PHP" width="80%" />
				<Bar title="MySQL" width="80%" />
				<Bar title="Wordpress" width="75%" />
				<Bar title="Laravel" width="70%" />
				<Bar title="Node.js" width="70%" />
			</div>
		</div>
	</div>
)

export default About;