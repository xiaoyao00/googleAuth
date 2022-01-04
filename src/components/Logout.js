import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setNotAuth } from './Store/auth';

const clientId =
	'1011460288864-ami8egl75j6hnnucjgqh9qias2cvfogc.apps.googleusercontent.com';

function Logout() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSuccess = () => {
		//console.log('Logout made successfully ' + isAuth);
		dispatch(setNotAuth());
	};

	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText='Logout'
				onLogoutSuccess={onSuccess}
			></GoogleLogout>
		</div>
	);
}

export default Logout;
