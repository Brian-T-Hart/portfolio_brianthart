import React from 'react';

const Service = (props) => (
	<div className="d-flex flex-column mb-2 justify-content-center service-item">
        <h4 className="m-2 text-center">{props.text}</h4>
    </div>
)

export default Service;