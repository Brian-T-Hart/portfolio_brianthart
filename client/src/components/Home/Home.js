import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			portfolioName: 'Brian Hart',
			portfolioDescription: 'Full Stack Web Developer'
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('clicked');
	}

	handleChange() {
		console.log('changing');
	}

    render() {
        return (
            <div className="section d-flex flex-column justify-content-center pl-5 pr-5" id="section-home">
				<h1 className="portfolio-name" id="portfolio-name">{this.state.portfolioName}</h1>
				<h2 className="portfolio-description">{this.state.portfolioDescription}</h2>
				<button className="btn btn-primary" onClick={this.handleClick}></button>
				<h4 id="under-construction">Under Construction</h4>
			</div>
        );
    }
}

export default Home;