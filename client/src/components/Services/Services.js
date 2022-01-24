import React from 'react';
import Service from './Service';

const Services = () => (
	<div className="bg-lightgray section" id="section-services">
		<h1 className="section-title">Services</h1>

		<div className="row flex-column flex-sm-row justify-content-around align-items-center mh-60">
            <div className="row flex-row flex-sm-row align-content-center mh-60">
                <Service text="Custom Web Site" />
                <Service text="Custom Wordpress Plugins" />
                <Service text="Custom API" />
                <Service text="API Integration" />
                <Service text="Google Analytics" />
                <Service text="Google App Script" />
            </div>
		</div>
	</div>
)

export default Services;