import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => (
	<div className="bg-lightgray section" id="section-blog">
		<h1 className="section-title">Blog</h1>

		<div className="row flex-column flex-sm-row justify-content-around align-items-center mh-60">
			<Link to="/blog/1">
				<div className="d-flex flex-column mb-3">
					<img alt="Web design graphic with computer screen, mouse and keyboard" className="blog-section-image" src="/images/web-dev.png" ></img>
					<h4 className="m-2 text-center">Web Design Basics</h4>
				</div>
			</Link>

			<Link to="/blog/2">
				<div className="d-flex flex-column mb-3">
					<img alt="Cloud computing graphic" className="blog-section-image" src="/images/web-hosting.jpg"></img>
					<h4 className="m-2 text-center">Cloud Computing</h4>
				</div>
			</Link>

			<Link to="/blog/3">
				<div className="d-flex flex-column mb-3">
					<img alt="Web design graphic" className="blog-section-image" src="http://ozarate.net/imagenes_sitio/titulo_img.png"></img>
					<h4 className="m-2 text-center">Full Stack Jack</h4>
				</div>
			</Link>
		</div>
	</div>
)

export default Blog;