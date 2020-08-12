import React from 'react';
import Profiles from './Profiles/Profiles';
import Treatments from './Treatments/Treatments';
import '../../../css/AboutUs.css';

function AboutUs({profiles, treatments, lang}) {
	return (
		<section className='about-us'>
			<Profiles profiles={profiles} lang={lang}/>
			<Treatments treatments={treatments} lang={lang}/>
		</section>
	);
};

export default AboutUs;
