import React from 'react';
import '../../../../css/Treatments.css';

function Treatments({lang, treatments}) {
	return (
		<div>
			<h2 className='section-title'>{lang === 'ES' ? 'Atendemos' : 'Treatments'}</h2>
			<ul className='list-group treatments-container'>
				{treatments.map((treatment, index) => (
					<li key={index} className='list-group-item'>{treatment}</li>
				))}
			</ul>
		</div>
	);
};

export default Treatments;
