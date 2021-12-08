import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuth: false, path: '' };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state) => {
			state.isAuth = true;
			console.log(state.isAuth);
		},
		setNotAuth: (state) => {
			state.isAuth = false;
		},
		setPath: (state, action) => {
			state.path = action.payload;
		},
	},
});

const { reducer, actions } = authSlice;

export const { setAuth, setNotAuth } = actions;
export default reducer;
