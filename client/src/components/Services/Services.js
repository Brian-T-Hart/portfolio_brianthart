import React from 'react';
import Service from './Service';

const Services = () => (
	<div className="bg-lightgray section" id="section-services">
		<h1 className="section-title">Services</h1>

		<div className="justify-content-center row" id="services">
            <div className="row flex-row flex-sm-row align-content-center justify-content-center mh-60">
                <Service text="Web Site" />
                <Service text="Web App" />
                <Service text="API" />
                <Service text="Wordpress" />
                <Service text="Google Analytics" />
                <Service text="Google App Scripts" />
            </div>
		</div>
	</div>
)

export default Services;