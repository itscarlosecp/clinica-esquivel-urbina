import React from 'react';
import '../../../css/Treatments.css';

const Treatments = props => {
	return (
		<div>
			<h2 className='section-title'>{props.lang === 'ES' ? 'Atendemos' : 'Treatments'}</h2>
			<ul className='list-group treatments-container'>
				{props.treatments.map((treatment, index) => (
					<li key={index} className='list-group-item'>{treatment}</li>
				))}
			</ul>
		</div>
	);
};

export default Treatments;
