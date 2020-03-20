import React from 'react';
import Profiles from './Profiles/Profiles';
import Treatments from './Treatments/Treatments';
import '../../css/AboutUs.css';

const AboutUs = props => {
	return (
		<section className='about-us'>
			<Profiles profiles={props.profiles} lang={props.lang}/>
			<Treatments treatments={props.treatments} lang={props.lang}/>
		</section>
	);
};

export default AboutUs;
