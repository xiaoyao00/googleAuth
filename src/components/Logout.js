import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setNotAuth } from './Store/auth';

const clientId =
	'1011460288864-ami8egl75j6hnnucjgqh9qias2cvfogc.apps.googleusercontent.com';
//'707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Logout() {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSuccess = () => {
		//console.log('Logout made successfully ' + isAuth);
		dispatch(setNotAuth());
	};

	const goTestpage = () => {
		navigate('/test');
	};

	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText='Logout'
				onLogoutSuccess={onSuccess}
			></GoogleLogout>
			<button onClick={goTestpage}>test</button>
		</div>
	);
}

export default Logout;
