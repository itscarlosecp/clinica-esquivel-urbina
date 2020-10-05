import React from 'react'
import Logo from '../../img/logo-texto.png'
import '../../css/Navbar.css'
import LanguageBtn from './LanguageBtn'

function Navbar({ lang, changeLang }) {
	return (
		<div className='navbar-container'>
			<nav className='navbar navbar-green bg-green'>
				<a className='navbar-brand' href='/'>
					<img src={Logo} height='30' alt='' />
				</a>
				<LanguageBtn lang={lang} changeLang={changeLang} />
			</nav>
		</div>
	)
}

export default Navbar
