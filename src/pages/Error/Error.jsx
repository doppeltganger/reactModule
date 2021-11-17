import React from 'react';
import banner from '../../theme/images/banner1.jpg';
import './Error.scss'

const Error = () => {
	return (
		<div 
			className='error'
			style={ {
				background: '50% 30% / cover no-repeat', 
				backgroundImage: `url(${banner})`,
			} }
		>
			<div className='container'>
				<div className='wrap'>
					<h2>404.<span> That’s an error.</span></h2>
					<p>The requested URL was not found on this server.</p>
					<p>That’s all we know.</p>
				</div>
			</div>
		</div>
	);
}

export default Error;
