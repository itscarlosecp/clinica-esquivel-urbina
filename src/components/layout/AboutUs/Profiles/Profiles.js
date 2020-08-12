import React from 'react';
import Profile from './Profile';

function Profiles({lang, profiles}) {
	return (
		<div>
			<h2 className='section-title'>{lang === 'ES' ? 'Nosotros' : 'About Us'}</h2>
			<div className='profiles-container'>
				{profiles.map((profile, index) => (
					<Profile key={index} profile={profile} />
				))}
			</div>
		</div>
	);
};

export default Profiles;
