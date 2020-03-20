import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import * as DataES from './resources/data_es.json';
import * as DataEN from './resources/data_en.json';

//@Components
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import AboutUs from './layout/AboutUs/AboutUs';
import Carousel from './layout/Gallery/Carousel';
import Map from './layout/Map/Map';
import Footer from './layout/Footer';

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

	changeLang = language => {
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
		return (
			<div className='App'>
				<Navbar lang={this.state.language} changeLang={this.changeLang} />
				<Header lang={this.state.language} />
				<div className='wrapper'>
					<AboutUs
						profiles={this.state.profiles}
						treatments={this.state.treatments}
						lang={this.state.language}
					/>
					<Carousel lang={this.state.language} />
					<Map
						address={this.state.contact.address}
						lang={this.state.language}
					/>
				</div>
				<Footer
					contact={this.state.contact}
					lang={this.state.language}
					loading={this.state.loading}
				/>
			</div>
		);
	}
}

export default App;
