import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logout from './Logout'

function MainPage() {
	
	const navigate = useNavigate();

	const goTestpage = () => {
		navigate('/test/100');
	};

	return (
		<div>
			<Logout />
			<br />
            <h1>This is main page after login </h1>
			<button onClick={goTestpage}>link to another page</button>
		</div>
	);
}

export default MainPage;