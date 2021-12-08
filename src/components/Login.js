import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setNotAuth } from './Store/auth';
import { GoogleLogin } from 'react-google-login';
import { useNavigate, useLocation } from 'react-router-dom';
// refresh token
//import { refreshTokenSetup } from '../utils/refreshToken';

import googleAuth from './googleAuth';

const clientId =
	'1011460288864-ami8egl75j6hnnucjgqh9qias2cvfogc.apps.googleusercontent.com';
//'707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';
const authUsers = ['xiaoz.yao@gmail.com'];

function Login(props) {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = props.path;

	const onSuccess = (res) => {
		console.log('Login Success: tokenobj:', res);

		console.log('already login ' + location);
		//server side verify
		const user = googleAuth(res.tokenId);
		user
			.then((res) => {
				if (authUsers.includes(res.email)) {
					dispatch(setAuth());
					if (location !== '/') {
						navigate(location);
					} else {
						navigate('/logout');
					}
				} else {
					dispatch(setNotAuth());
				}
			})
			.catch(() => {});

		//refreshTokenSetup(res);
	};

	const onFailure = (res) => {
		console.log('Login failed: res:', res);
	};

	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText='Login'
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
				style={{ marginTop: '100px' }}
				isSignedIn={true}
			/>
		</div>
	);
}

export default Login;
