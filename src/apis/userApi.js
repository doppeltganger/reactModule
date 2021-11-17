import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_KEY;

const movieAPI = axios.create({
	baseURL: API_URL,
	params: {
		api_key: API_KEY,
		language: 'en-US',
	},
});

//generate token
const generateToken = async () => {
	const {
		data: { request_token },
	} = await movieAPI.get(`/authentication/token/new`);
	return request_token;
};

//generate session ID
const generateSessionID = async (requestToken) => {
	const { data: session_id } = await movieAPI.post(
		'/authentication/session/new',
		{
			request_token: requestToken,
		},
	);
	localStorage.setItem('session_id', session_id);
	return session_id;
};

//get account
const getAccount = async (sessionId) => {
	const { data } = await movieAPI.get('/account', {
		params: {
			session_id: sessionId,
		},
	});
	localStorage.setItem('user', JSON.stringify(data));
	return data;
};

//add movie to favorite
const markFavoriteMovie = async (
	accountId,
	sessionId,
	movieId,
	status,
) => {
	const data = await movieAPI.post(
		`/account/${accountId}/favorite`,
		{
			media_type: 'movie',
			media_id: movieId,
			favorite: status,
		},
		{
			params: {
				session_id: sessionId,
			},
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		},
	);
	return data;
};

export const userApis = {
	generateToken,
	generateSessionID,
	getAccount,
	markFavoriteMovie,
}