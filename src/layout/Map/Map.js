import React from 'react';
import '../../css/LocationMap.css';
import { Map, Marker, TileLayer } from 'react-leaflet';

const LocationMap = props => {
	const position = [11.92939, -85.959212];

	return (
		<section>
			<h2 className='section-title'>
				{props.lang === 'ES' ? 'Encuéntranos' : 'Find Us'}
			</h2>
			<div id='map'>
				<Map
					center={position}
					zoom={16}
					style={{ width: '100%', height: '100%' }}
				>
					<TileLayer
						url='https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=7GQKOAd9gkqPebbuiESJ'
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					<Marker position={position} />
				</Map>
			</div>
			<p className='location'>{props.address}</p>
		</section>
	);
};

export default LocationMap;
