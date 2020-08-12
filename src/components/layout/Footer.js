import React from 'react';
import '../../css/Footer.css';

function Footer({ lang }) {
	return (
		<footer className='footer'>
			<h2 className='footer-title'>{lang === 'ES' ? 'Contacto' : 'Contact'}</h2>
			<hr/>
			<div className='contact-container'>
				<div className='office-phone'>
					<h3 className='footer-text'>
						{lang === 'ES' ? 'Telefono (Oficina)' : 'Phone (Office)'}:
					</h3>
					<p className='footer-text'>(+505) 2552-0664</p>
				</div>
				<div className='personal-phone'>
					<h3 className='footer-text'>
						{lang === 'ES' ? 'Telefono (Personal)' : 'Phone (Personal)'}:
					</h3>
					<p className='footer-text'>(+505) 8954-4579 / (+505) 8971-7756</p>
				</div>
				<div className='email'>
					<h3 className='footer-text'>E-mail:</h3>
					<p className='footer-text'>
						erwinesquivel@hotmail.com / ximenaurbina@hotmail.com
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
