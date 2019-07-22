import React from 'react';

const Bar = (props) => (
	<div className="bar-container">
		<div className="bar mb-3" style={{width: props.width}}>
			<div className="bar-title text-center">{props.title}</div>
			<div className="bar-width text-center">{props.width}</div>
		</div>
	</div>
)

export default Bar;