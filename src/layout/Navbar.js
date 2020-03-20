import React, { Fragment } from 'react';
import Logo from '../img/logo-texto.png';
import '../css/Navbar.css';
import LanguageBtn from './LanguageBtn';

const Navbar = props => {
	const alert =
		props.lang === 'ES'
			? 'Por medidas de seguridad y pensando en la salud de nuestros pacientes estaremos cerrados por dos semanas, atendiendo únicamente casos de emergencia.'
			: 'For security measures and thinking about the health of our patients, we will be closed for two weeks, attending emergency cases only.';

	return (
		<div className='navbar-container'>
			<small className='coronavirus-alert' style={{ margin: 0 }}>
				{' '}
				<span>{props.lang === 'ES' ? 'AVISO' : 'NOTICE'}: </span>
				{alert}
			</small>
			<nav className='navbar navbar-green bg-green'>
				<a className='navbar-brand' href='#'>
					<img src={Logo} height='30' alt='' />
				</a>
				<LanguageBtn lang={props.lang} changeLang={props.changeLang} />
			</nav>
		</div>
	);
};

export default Navbar;
