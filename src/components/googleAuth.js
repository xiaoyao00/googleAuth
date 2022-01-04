// Google Auth
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID =
	'1011460288864-ami8egl75j6hnnucjgqh9qias2cvfogc.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

const googleAuth = async (token) => {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
	});
	const payload = ticket.getPayload();

	console.log(`User ${payload.name} verified`);

	const { sub, email, name, picture } = payload;
	const userId = sub;
	return { userId, email, name, picture };
};

//module.exports = googleAuth;
export default googleAuth;