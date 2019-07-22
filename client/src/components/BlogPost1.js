import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogPost1 extends Component {
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
					<h1 className="m-0 text-primary blog-title">Web Design Basics</h1>
					<h6 className="blog-date pl-2">May 27, 2019</h6>
				</header>

				<section>
					<p>Much could be said about modern web design. Courses have been written and videos produced. Here, I give a quick overview of some basic concepts of good web design.</p>
					<h3>Clear Purpose</h3>
					<p>Good web design begins with the user in mind. Whether trying to convey a message, attract customers, make a sale, or provide a useful tool, the page should meet the need of the user in the most effective and efficient way possible. Start with a clear purpose in mind and stick to it. Don't clutter the page with different types of content that makes it confusing for the user.</p>

					<h3>Clear Communication</h3>
					<p>Communication can take many forms, and will differ depending on the site, but there are some principles to keep in mind that will help deliver the message more effectively. Organize information in a meaningful way. Utilize headings, sub-headings, and paragraphs. You see this on most blogs and news sights. Different fonts, font-sizes, and font-weights are used to differentiate between the different elements.</p>

					<p>Another way to communicate clearly is to use bullet points, icons, and images. People searching the web often want to find things quickly and won't always read through long paragraphs. Use bullet points when appropriate. Icons have become a standard. Use icons that are obvious or intuitive to the user, such as a home icon or a back arrow.</p>

					<h3>Readability</h3>
					<p>Use appropriate typefaces/fonts. There are many different fonts and styles out there. Some look very unique and may have their place, but be aware that certain fonts are easier to read than others and think about whether or not the fonts you are using will be accessible to all. Typically sans-serif fonts are easier to read, such as Arial and Verdana.</p>

					<p>Be aware of text and background contrast, especially when the text is over an image that has a variation in brightness or color. For example, white text over an image can often be difficult to read if the image has a light area.</p>

					<h3>Navigation</h3>
					<p>Users should be able to navigate your site with ease. If your site consists of multiple pages, there should be clear navigation. This can be done in a number of ways, such as, with a navbar, breadcrumbs, or clickable buttons. The easier it is for users to find what they are looking for, the less likely they are to get frustrated and leave your site. In general, users should be able to get where they want to go in three clicks or less.</p>
				</section>
			</article>
		)
	}
}

export default BlogPost1;