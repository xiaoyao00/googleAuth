import React from 'react';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';

const Test = () => {
	console.log('visit test page');
	const navigate = useNavigate();
	const goHomepage = ()=>{
		navigate('/main')
	}
	return (
		<>
			<Logout />
			<button onClick={goHomepage}>home page</button>
			<h2>hello, this is another test page </h2>
		</>);
};

export default Test;
