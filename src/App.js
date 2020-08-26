import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import * as DataES from './resources/data_es.json';
import * as DataEN from './resources/data_en.json';

// &Components
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import AboutUs from './components/layout/AboutUs/AboutUs';
import Carousel from './components/layout/Gallery/Carousel';
import Map from './components/layout/Map/Map';
import Footer from './components/layout/Footer';

class App extends Component {
	state = {
		language: 'ES',
		profiles: [],
		treatments: [],
		contact: {}
	};

	componentDidMount() {
		const res = DataES;
		const [...data] = res.default;
		this.setState({
			profiles: data[0].profiles,
			treatments: data[1].treatments,
			contact: data[2].contact
		});
	}

	changeLang = (language) => {
		this.setState({ language });
		const res = language === 'ES' ? DataES : DataEN;
		const [...data] = res.default;
		this.setState({
			profiles: data[0].profiles,
			treatments: data[1].treatments,
			contact: data[2].contact
		});
	};

	render() {
		const { language, profiles, treatments, loading, contact } = this.state;

		return (
			<div className='App'>
				<Navbar lang={language} changeLang={this.changeLang} />
				<Header lang={language} />
				<div className='wrapper'>
					<AboutUs
						profiles={profiles}
						treatments={treatments}
						lang={language}
					/>
					<Carousel lang={language} />
					<Map address={contact.address} lang={language} />
				</div>
				<Footer contact={contact} lang={language} loading={loading} />
			</div>
		);
	}
}

export default App;
