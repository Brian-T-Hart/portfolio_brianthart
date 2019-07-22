import React, { Component } from 'react';
import projectDetails from './projectDetails';
import ProjectModal from './ProjectModal';
import ProjectModalBtn from './ProjectModalBtn';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: projectDetails,
			viewMoreProject: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		const projectId = event.target.id;
		this.setState({ viewMoreProject: projectDetails[projectId] });
	}

	render() {
		const projects = this.state.projects.map((project, index) =>
			<div className="project-container" key={index}>
				<div className="card" style={{ background: 'url(' + project.image_link + ') center center/cover' }}></div>
				<div className="project-text text-center">
					<div className="project-title font-weight-bold">{project.title}</div>
					<div className="project-subtitle">
						<h5 className="text-secondary">{project.subtitle}</h5>
					</div>
					<div className="d-flex justify-content-center project-links">
						<ProjectModalBtn id={index} onClick={this.handleClick} />
					</div>
				</div>
			</div>
		)

		return (
			<div className="section" id="section-projects">
				<h1 className="section-title">Projects</h1>
				<div className="d-flex justify-content-center row" id="gallery">
					{projects}
				</div>
				<ProjectModal project={this.state.viewMoreProject} />
			</div>
		)
	}
}

export default Projects;