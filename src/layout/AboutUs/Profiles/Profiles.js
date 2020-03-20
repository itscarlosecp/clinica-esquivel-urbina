import React from 'react';
import Profile from './Profile';

const Profiles = props => {
	return (
		<div>
			<h2 className='section-title'>{props.lang === 'ES' ? 'Nosotros' : 'About Us'}</h2>
			<div className='profiles-container'>
				{props.profiles.map((profile, index) => (
					<Profile key={index} profile={profile} />
				))}
			</div>
		</div>
	);
};

export default Profiles;
