import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogPost2 extends Component {
	componentDidMount() {
		const element = document.getElementById('blog-page');
		element.scrollIntoView();
	}

	render() {
		return (
			<article className="full-height" id="blog-page">
				<nav>
					<Link to='/'><i className="fas fa-arrow-circle-left"></i></Link>
				</nav>

				<header className="mb-4">
					<h1 className="m-0 text-primary blog-title">Cloud Computing</h1>
					<h6 className="blog-date pl-2">June 7, 2019</h6>
				</header>

				<section>
					<h3>Post 2: Coming Soon</h3>
					<p>
						Place holder text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia dictum lectus non sollicitudin. Sed sed mauris eget erat bibendum lacinia. Ut non dolor hendrerit, facilisis justo et, rhoncus justo. Nam hendrerit sodales lorem sit amet cursus. Donec justo dolor, tincidunt ut enim at, finibus lobortis dolor. Suspendisse potenti. Aliquam tincidunt iaculis elementum. Quisque nec purus scelerisque, placerat libero nec, rhoncus velit. Nam eu pretium nibh, non tempus quam.
			
						Nullam sed nibh mattis, fermentum nisl at, luctus neque. Sed interdum dignissim arcu eu gravida. Morbi lobortis vehicula ante, tristique porttitor massa viverra nec. Donec sagittis metus ligula, vitae semper risus viverra eu. Etiam sed porta magna, et feugiat ipsum. Curabitur dictum at eros vel posuere. Praesent quam est, facilisis sit amet consectetur et, commodo ac mauris. Proin augue tortor, vulputate at metus quis, imperdiet imperdiet nisi. Vivamus iaculis mi faucibus velit sodales, vitae facilisis mi aliquam. Maecenas aliquam nunc vel pulvinar aliquam. Sed et iaculis lacus. Donec nec metus at enim lacinia iaculis. Integer lacinia ex eu elit volutpat elementum. Etiam molestie nisi eget diam efficitur faucibus. Suspendisse quis quam magna. Nam molestie ut nibh in efficitur.
				</p>
				</section>
			</article>
		)
	}
}

export default BlogPost2;