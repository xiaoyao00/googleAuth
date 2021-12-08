import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Test from './components/Test';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App(props) {
	const isAuth = useSelector((state) => state.auth.isAuth);

	let routes = '';
	if (isAuth)
		routes = (
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Login />}></Route>
					<Route exact path='/test' element={<Test />}></Route>
					<Route exact path='/logout' element={<Logout />}></Route>
				</Routes>
			</BrowserRouter>
		);
	else {
		routes = (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login path={props.path} />}></Route>
					<Route path='*' element={<Navigate to='/' />}></Route>
				</Routes>
			</BrowserRouter>
		);
	}
	return <div>{routes}</div>;
}

export default App;
