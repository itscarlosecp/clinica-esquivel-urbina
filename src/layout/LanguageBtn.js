import React from 'react';
import '../css/Navbar.css';

const LanguageBtn = props => {
	const onClick = () => {
		const language = props.lang === 'ES' ? 'EN' : 'ES';
		props.changeLang(language);
	};

	return (
		<button className='lang-button' onClick={onClick}>
			{props.lang === 'ES' ? 'English' : 'Spanish'}
		</button>
	);
};

export default LanguageBtn;
