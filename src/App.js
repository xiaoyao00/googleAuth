import React from 'react';
import './App.css';
import Login from './components/Login';
import Test from './components/Test';
//import LoginHooks from './components/LoginHooks';
//import LogoutHooks from './components/LogoutHooks';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPage from './components/MainPage';

function App(props) {
	const isAuth = useSelector((state) => state.auth.isAuth);

	let routes = '';
	if (isAuth)
		routes = (
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Login />}></Route>
					<Route exact path='/test/:id' element={<Test />}></Route>
					<Route path='/main' element={<MainPage />}></Route>
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
