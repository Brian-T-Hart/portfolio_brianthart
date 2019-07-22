import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Axios from 'axios';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		let data = this.state;

		Axios.post('/mail/send', data)
			.then(response => {
				if (response.data.message === 'success') {
					this.setState({
						name: '',
						email: '',
						message: ''
					});
					alert('Your message was successfully sent!');
				}
				else {
					alert('Something went wrong. Please check your connection and try again.');
				}
			})
			.catch(error => {
				console.log(error);
				alert('There was a problem submitting the form. Please check your entries and try again.');
			})
	}

	render() {
		return (
			<div id="section-contact" className="section bg-gray p-0">
				<svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light bg-gray">
					<path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
				</svg>

				<div>

					<h1 className="section-title text-white mb-2 pt-3">Contact</h1>

					<h5 className="section-description text-center text-primary">Have a question or comment?</h5>

					<form onSubmit={this.handleSubmit} className="text-center" id="contact-form">
						<div className="form-group mb-1">
							<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
						</div>

						<div className="form-group mb-1">
							<input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
						</div>

						<div className="form-group">
							<textarea name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange} required />
						</div>

						<button className="btn btn-primary">Submit</button>
					</form>

					<Footer />

				</div>
			</div>
		)
	}
}

export default Contact;