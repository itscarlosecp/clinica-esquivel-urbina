import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../css/Carousel.css';

const Gallery = props => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<section>
			<h2 className='section-title'>
				{props.lang === 'ES' ? 'Instalaciones' : 'Our Clinic'}
			</h2>
			<Carousel
				className='carousel-container'
				activeIndex={index}
				onSelect={handleSelect}
			>
				<Carousel.Item className='carousel-item'>
					<img
						className='d-block w-100 carousel-img'
						src={require('../../img/gallery/img-0.jpeg')}
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item className='carousel-item'>
					<img
						className='d-block w-100 carousel-img'
						src={require('../../img/gallery/img-2.jpeg')}
						alt='Third slide'
					/>
				</Carousel.Item>
				<Carousel.Item className='carousel-item'>
					<img
						className='d-block w-100 carousel-img'
						src={require('../../img/gallery/img-3.jpeg')}
						alt='Third slide'
					/>
				</Carousel.Item>
				<Carousel.Item className='carousel-item'>
					<img
						className='d-block w-100 carousel-img'
						src={require('../../img/gallery/img-4.jpeg')}
						alt='Third slide'
					/>
				</Carousel.Item>
				<Carousel.Item className='carousel-item'>
					<img
						className='d-block w-100 carousel-img'
						src={require('../../img/gallery/img-6.jpeg')}
						alt='Third slide'
					/>
				</Carousel.Item>
			</Carousel>
		</section>
	);
};

export default Gallery;
