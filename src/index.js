import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from '../src/components/Store/index';
import { Provider } from 'react-redux';

const path = window.location.pathname;
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App path={path} />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
