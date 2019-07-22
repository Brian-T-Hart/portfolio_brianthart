import React from 'react';

const ProjectModalBtn = (props) => (
			<div>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#learnMoreModal" id={props.id} onClick={props.onClick}>
					Learn More
				</button>
			</div>
		)

export default ProjectModalBtn;