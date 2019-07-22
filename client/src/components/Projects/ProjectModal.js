import React from 'react';

const ProjectModal = (props) => (
	<div>
		<div className="modal fade" id="learnMoreModal" tabIndex="-1" role="dialog" aria-labelledby="learnMoreModalLabel" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header justify-content-center">
						<img alt={props.project.title} src={props.project.image_link} />
					</div>

					<div className="modal-body">
						<h5 className="modal-title text-orange font-weight-bold" id="learnMoreModalLabel">
							{props.project.title}
						</h5>

						<p>{props.project.description}</p>

						<div className="d-flex justify-content-center project-links">
							<a className="project-link pr-3" href={props.project.github_link} target="_blank" rel="noopener noreferrer">view code</a>

							<a className="project-link pl-3" href={props.project.web_link} target="_blank" rel="noopener noreferrer">view site</a>
						</div>
					</div>

					<div className="modal-footer">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ProjectModal;
