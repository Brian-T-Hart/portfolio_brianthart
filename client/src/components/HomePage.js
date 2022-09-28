import React, { Component } from 'react';
import About from './About/About';
// import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Services from './Services/Services';

class HomePage extends Component {
    render() {
        return (
			<div id="main-container">
				<Navbar />
				<div className="content-container">
					<Home />
					<About />
					{/* <Blog /> */}
					<Services />
					<Projects />
					<Contact />
				</div>
			</div>
        );
    }
}

export default HomePage;
