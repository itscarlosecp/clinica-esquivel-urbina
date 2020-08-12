import React from 'react';
import '../../css/Header.css';

function Header({lang}) {
	return (
		<header className='masthead'>
			<div className='container h-100'>
				<div className='row h-100 align-items-center'>
					<div className='col-12 text-center'>
						<h1 className='title'>Esquivel<br />Urbina</h1>
						<p className='subtitle'>{lang ==='ES' ? 'Odontología Integral' : 'Integral Dentristy'}</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
