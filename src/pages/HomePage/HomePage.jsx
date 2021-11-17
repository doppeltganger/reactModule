import React from 'react';
import banner from '../../theme/images/banner.jpg';
import './HomePage.scss'



const HomePage = () => {
	return (
		<div 
			className='home'
			style={ {
				background: '50% 30% / cover no-repeat', 
				backgroundImage: `url(${banner})`,
			} }
		>
			<div className='container'>
				<h1 className='home__title'>
					Welcome.
					<span>Millions of movies, TV shows and people to discover. Explore now.</span> 
				</h1>
			</div>
		</div>
	);
}

export default HomePage;
